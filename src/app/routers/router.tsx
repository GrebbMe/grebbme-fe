import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/app/layout';
import { ProjectRecruitmentDetail } from '@/pages/auth';
import { GithubLogin, SignUp } from '@/pages/auth/ui';
import { routerPath } from '@/shared';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: routerPath.LOGIN,
        element: <GithubLogin />,
      },
      {
        path: routerPath.SIGNUP,
        element: <SignUp />,
      },
      {
        path: '/board/:id',
        element: <ProjectRecruitmentDetail />,
      },
    ],
  },
]);
