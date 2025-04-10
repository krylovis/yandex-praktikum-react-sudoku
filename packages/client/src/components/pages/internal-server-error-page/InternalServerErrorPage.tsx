import { ErrorComponent } from '../..';

export default function InternalServerErrorPage() {
  return (
    <ErrorComponent code="500" subtitle="Мы уже фиксим" />
  );
}
