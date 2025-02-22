import type { Route } from './+types/home';
import { Welcome } from '../components/welcome';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' }
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.APP_ENV };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <Welcome message={loaderData.message} />;
}
