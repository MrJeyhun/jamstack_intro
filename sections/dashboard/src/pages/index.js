import React from 'react';
import { Link } from "gatsby";

import Layout from '../components/layout';

export default () => (
    <Layout>
        <h1>Dashboard app</h1>
        <p>Login to find out why</p>
        <Link to='/dashboard'>Go to the dashboard</Link>
    </Layout>
)