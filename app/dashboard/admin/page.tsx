// This is the custom Admin Dashboard
// Django Admin remains at /admin (handled by Django)
// This dashboard is at /dashboard/admin

import { redirect } from 'next/navigation';

export default function DashboardAdminPage() {
    redirect('/admin');
}
