import { queryField } from 'nexus';
export const userQuery = queryField('user', {
    type: 'User',
    args: {},
    resolve: async (_, { id }, ctx) => {
        const user = await ctx.prisma.user.findUnique({
            where: { id },
        });
        return user;
    },
});
