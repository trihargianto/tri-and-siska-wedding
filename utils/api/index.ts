import { supabaseInstance } from "./subabase";
import { GUEST_BOOK_TABLE, GUEST_TABLE } from "./tableNames";

export const getGuestByName = async (name: string) => {
  try {
    const { data, error } = await supabaseInstance
      .from(GUEST_TABLE)
      .select("*")
      .eq("name", name);

    if (error) {
      throw error;
    }

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getGuestBookMessages = async () => {
  try {
    const { data, error } = await supabaseInstance.from(GUEST_BOOK_TABLE)
      .select(`
      id,
      message,
      guest (
        name
      )
    `);

    if (error) {
      throw error;
    }

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const addNewGuestMessage = async ({
  guestId,
  message,
}: {
  guestId: number;
  message: string;
}) => {
  try {
    const { data, error } = await supabaseInstance
      .from(GUEST_BOOK_TABLE)
      .insert([{ guest_id: guestId, message }]);

    if (error) {
      throw error;
    }

    return data;
  } catch (err) {
    console.log(err);
  }
};
