import { login } from '../actions';
import { loginUser } from '../../../utils/fetch';
import { FAILED, LOADING } from '../constants';

const dispatch = jest.fn();

jest.mock('../../../utils/fetch', () => ({
  loginUser : jest.fn()
}));

describe('src/pages/Login/actions', () => {
  test('login', async () => {
    const expectTest = expect(dispatch).toHaveBeenNthCalledWith;

    loginUser.mockResolvedValueOnce({ data: { accessToken: 'tes.eyAiZXhwIjogMTIzIH0=' } });
    await login('tes')(dispatch);
    expectTest(1, { isLoading: true, type: LOADING });

    loginUser.mockResolvedValueOnce({ data: {} });
    await login('tes')(dispatch);
    expectTest(5, { message : 'You are not allowed to access', type: FAILED });

    loginUser.mockRejectedValueOnce({ statusCode: 400, message: 'err' });
    await login({ email: 'test' })(dispatch);

    loginUser.mockRejectedValueOnce({ statusCode: 500, message: 'err' });
    await login({ email: 'test' })(dispatch);
  });
});

