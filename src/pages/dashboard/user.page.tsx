import { useGetUserMetadataQuery } from '@/app/services/backend/backendApi';
import BasicLayout from '@/layouts/BasicLayout';

export default function UserDashboard() {
  const userAddress = `0x1234`;
  const { data } = useGetUserMetadataQuery(userAddress);

  return <BasicLayout />;
}
