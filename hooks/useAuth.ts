// hooks/useAuth.ts
import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import * as AuthSession from "expo-auth-session";
import { Session, User } from "@supabase/supabase-js";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  // Load session on mount
  useEffect(() => {
    const loadSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        setSession(data.session);
        setUser(data.session.user);
      }
      setLoading(false);
    };

    loadSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
      },
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const signInWithGoogle = useCallback(async () => {
    const redirectUri = AuthSession.makeRedirectUri();

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: redirectUri,
      },
    });

    if (error) {
      console.error("Google sign-in error:", error.message);
    }
  }, []);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
  }, []);

  return {
    user,
    session,
    loading,
    signInWithGoogle,
    signOut,
  };
}
