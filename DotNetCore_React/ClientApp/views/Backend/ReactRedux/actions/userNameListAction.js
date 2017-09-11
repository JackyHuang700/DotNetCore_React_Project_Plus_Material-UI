export const selectAction = (user, event) => {
    return {
        type: "USERSEELCT",
        user,
        event,
    };
}