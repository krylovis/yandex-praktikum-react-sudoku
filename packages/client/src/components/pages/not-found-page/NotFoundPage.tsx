import { ErrorComponent } from '../..';

export default function NotFoundPage() {
  return (
    <ErrorComponent code="404" subtitle="Не туда попали" />
  );
}
