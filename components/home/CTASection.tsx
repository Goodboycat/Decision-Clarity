'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardBody } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Card className="bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 border-none">
          <CardBody className="text-center py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Make Better Decisions?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start your journey to mindful decision-making today
            </p>
            <Link href="/dashboard">
              <Button
                variant="accent"
                size="lg"
                className="shadow-xl hover:shadow-2xl"
              >
                Get Started Free <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </CardBody>
        </Card>
      </motion.div>
    </section>
  );
};
