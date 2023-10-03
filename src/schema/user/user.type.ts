import { objectType } from 'nexus';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.string('id');
    t.nonNull.string('f_name');
    t.nonNull.string('l_name');
    t.string('email');
    t.nonNull.string('password_digest');
    t.nonNull.string('phone');
    t.nonNull.string('created_at');
    t.nonNull.string('updated_at');
  },
});
