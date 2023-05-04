import Uploader from '@/components/upload/Uploader'
import Layout from '@/components/utils/Layout/Layout'
import React from 'react'

export default function Upload() {
  return (
    <Layout header={false}>
        <Uploader/>
    </Layout>
  )
}
