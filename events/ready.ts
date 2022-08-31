export default {
    name: "ready",
    once: true,
    async execute(undifined, client) {
        console.log(`${client.user.tag} is ready`);
    }
}