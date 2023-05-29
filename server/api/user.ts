export default defineEventHandler(async (event) => {
  console.log("call user")
    try {
      const data = await $fetch(`https://fakestoreapi.com/users`);
      return data;
    } catch (e) {
      console.error(e);
      return { message: 'Error' };
    }
  });
  