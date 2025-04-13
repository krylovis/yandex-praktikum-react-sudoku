import ErrorComponent from '../../error-component/ErrorComponent';

export default function InternalServerErrorPage() {
  return (
    <ErrorComponent code="500" subtitle="Мы уже фиксим" />
  );
}
