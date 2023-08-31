import { useGetUserMetadataQuery } from '@/app/services/backend/backendApi';

export default function UserDashboard() {
  const userAddress = `0x1234`;
  const { data } = useGetUserMetadataQuery(userAddress);

  return <main />;
}
