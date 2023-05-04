import Hero from '@/components/CompanyProfile/Hero'
import HiringList from '@/components/CompanyProfile/HiringList'
import Layout from '@/components/utils/Layout/Layout'
import React from 'react'

export default function CompanyProfile() {
  return (
    <Layout>
      <Hero/>
      <HiringList/>
    </Layout>
  )
}
