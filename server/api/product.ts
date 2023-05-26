export default defineEventHandler(async (event) => {
    try {
      const data = await $fetch(`${config.public.baseAccountUrl}/customers/resetPassword`, {
        headers: headers,
        method: 'POST',
        body: newBody,
      });
      return data;
    } catch (e) {
      console.error(e);
      return { message: 'Error' };
    }
  });
  