'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import CompanyFormModal from '@/app/components/company-form-modal';
// import CompanyForm from '@/app/components/company-form';
// import Modal from '@/app/components/modal';

export interface PageProps {}

export default function Page({}: PageProps) {
  const router = useRouter();
  return (
    // <Modal show={true} onClose={() => router.back()}>
    //   <CompanyForm onSubmit={console.log} />
    // </Modal>

    <CompanyFormModal
      onSubmit={console.log}
      show={true}
      onClose={() => router.back()}
    />
  );
}
