'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  DollarSign, 
  TrendingUp, 
  Target, 
  Calendar,
  ArrowUp,
  ArrowDown,
  Zap,
  Shield,
  Users,
  Star
} from 'lucide-react'

export function SavingsOverview() {
  const [savings, setSavings] = useState({
    totalSaved: 2847,
    monthlySaved: 1200,
    weeklySaved: 300,
    dailySaved: 43,
    yearlyProjection: 14400,
    categories: {
      subscriptions: 450,
      disputes: 800,
      refunds: 200,
      bills: 350,
      deals: 400
    }
  })

  const [trends, setTrends] = useState({
    monthly: 15.2,
    weekly: 8.7,
    daily: 2.1
  })

  const [goals, setGoals] = useState({
    monthly: 2000,
    yearly: 24000,
    achieved: 60
  })

  const stats = [
    {
      label: 'Total Saved',
      value: `$${savings.totalSaved.toLocaleString()}`,
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      label: 'This Month',
      value: `$${savings.monthlySaved.toLocaleString()}`,
      change: '+8.2%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      label: 'Weekly Average',
      value: `$${savings.weeklySaved.toLocaleString()}`,
      change: '+5.1%',
      trend: 'up',
      icon: Target,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      label: 'Daily Average',
      value: `$${savings.dailySaved.toLocaleString()}`,
      change: '+3.2%',
      trend: 'up',
      icon: Calendar,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ]

  const categories = [
    { name: 'Subscriptions', amount: savings.categories.subscriptions, color: 'bg-blue-500' },
    { name: 'Disputes', amount: savings.categories.disputes, color: 'bg-green-500' },
    { name: 'Refunds', amount: savings.categories.refunds, color: 'bg-yellow-500' },
    { name: 'Bills', amount: savings.categories.bills, color: 'bg-purple-500' },
    { name: 'Deals', amount: savings.categories.deals, color: 'bg-red-500' }
  ]

  const totalCategoryAmount = Object.values(savings.categories).reduce((sum, amount) => sum + amount, 0)

  return (
    <div className="space-y-8">
      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="flex items-center space-x-1">
                  {stat.trend === 'up' ? (
                    <ArrowUp className="w-4 h-4 text-green-500" />
                  ) : (
                    <ArrowDown className="w-4 h-4 text-red-500" />
                  )}
                  <span className={`text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                </div>
              </div>
              
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Savings Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Category Breakdown */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Savings by Category
          </h3>
          
          <div className="space-y-4">
            {categories.map((category, index) => {
              const percentage = (category.amount / totalCategoryAmount) * 100
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 ${category.color} rounded-full`} />
                    <span className="font-medium text-gray-900">{category.name}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <motion.div
                        className={`h-2 ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900 w-16 text-right">
                      ${category.amount}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Monthly Goal Progress */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Monthly Goal Progress
          </h3>
          
          <div className="text-center mb-6">
            <div className="text-4xl font-bold text-gray-900 mb-2">
              {goals.achieved}%
            </div>
            <div className="text-sm text-gray-600">
              ${savings.monthlySaved.toLocaleString()} of ${goals.monthly.toLocaleString()} goal
            </div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
            <motion.div
              className="h-4 bg-gradient-to-r from-flow-500 to-success-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${goals.achieved}%` }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-900">
                ${(goals.monthly - savings.monthlySaved).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Remaining</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-900">
                {Math.ceil((goals.monthly - savings.monthlySaved) / 30)}
              </div>
              <div className="text-sm text-gray-600">Daily needed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Insights */}
      <div className="bg-gradient-to-r from-flow-500 to-flow-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">AI Insights</h3>
          <Zap className="w-6 h-6" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold mb-2">$2,847</div>
            <div className="text-flow-200">Average Monthly Savings</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-2">94.2%</div>
            <div className="text-flow-200">Dispute Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-2">12</div>
            <div className="text-flow-200">Optimizations This Month</div>
          </div>
        </div>
      </div>
    </div>
  )
}
