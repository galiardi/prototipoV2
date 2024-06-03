import type { NextPage } from 'next';
import { Layout } from '../../components/layouts';
import { Uploader } from '../../components/ui';

const uploader: NextPage = () => {
  return (
    <Layout>
      <Uploader />
    </Layout>
  );
};

export default uploader;
