import { queryField } from 'nexus';
import { Context } from '../../context';

export const userQuery = queryField('user', {
  type: 'User',
  args: {},
  resolve: async (_, { id }, ctx: Context) => {
    const user = await ctx.prisma.user.findUnique({
      where: { id },
    });
    return user;
  },
});
