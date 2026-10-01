import { RouteObject } from "react-router";
import { lazy } from 'react';
import HomePage from './pages/index';
import NotFoundPage from './pages/_404';
import LandingPage from './pages/lp';
const AboutPage = lazy(() => import('./pages/about'));
const ServicesPage = lazy(() => import('./pages/services'));
const HowItWorksPage = lazy(() => import('./pages/how-it-works'));
const ContactPage = lazy(() => import('./pages/contact'));
const PrivacyPage = lazy(() => import('./pages/privacy'));
const TermsPage = lazy(() => import('./pages/terms'));
const RefundPolicyPage = lazy(() => import('./pages/refund-policy'));
const ProofOfDeliveryPage = lazy(() => import('./pages/proof-of-delivery'));
const ShippingPolicyPage = lazy(() => import('./pages/shipping-policy'));
const AcceptableUsePage = lazy(() => import('./pages/acceptable-use'));
const BillingPolicyPage = lazy(() => import('./pages/billing-policy'));
const CancellationPolicyPage = lazy(() => import('./pages/cancellation-policy'));
const PricingPage = lazy(() => import('./pages/pricing'));
const ShippingPage = lazy(() => import('./pages/shipping'));
const TrackingPage = lazy(() => import('./pages/tracking'));
const CompanyInfoPage = lazy(() => import('./pages/company-info'));
const ProhibitedProductsPage = lazy(() => import('./pages/prohibited-products'));
const BlogPage = lazy(() => import('./pages/Blog'));
const BlogPostPage = lazy(() => import('./pages/BlogPost'));

export const routes: RouteObject[] = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/how-it-works', element: <HowItWorksPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/pricing', element: <PricingPage /> },
  { path: '/shipping', element: <ShippingPage /> },
  { path: '/tracking', element: <TrackingPage /> },
  { path: '/company-info', element: <CompanyInfoPage /> },
  { path: '/prohibited-products', element: <ProhibitedProductsPage /> },
  { path: '/privacy', element: <PrivacyPage /> },
  { path: '/terms', element: <TermsPage /> },
  { path: '/refund-policy', element: <RefundPolicyPage /> },
  { path: '/proof-of-delivery', element: <ProofOfDeliveryPage /> },
  { path: '/shipping-policy', element: <ShippingPolicyPage /> },
  { path: '/acceptable-use', element: <AcceptableUsePage /> },
  { path: '/billing-policy', element: <BillingPolicyPage /> },
  { path: '/cancellation-policy', element: <CancellationPolicyPage /> },
  { path: '/blog', element: <BlogPage /> },
  { path: '/blog/:slug', element: <BlogPostPage /> },
  { path: '/lp/:slug', element: <LandingPage /> },
  { path: '*', element: <NotFoundPage /> },
];

export type Path = '/' | '/about' | '/services' | '/how-it-works' | '/contact' | '/pricing' | '/shipping' | '/tracking' | '/company-info' | '/prohibited-products' | '/privacy' | '/terms' | '/refund-policy' | '/blog';
export type Params = Record<string, string | undefined>;
