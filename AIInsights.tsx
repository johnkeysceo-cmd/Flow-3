'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Brain, 
  Zap, 
  Target, 
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  DollarSign,
  Shield,
  Clock,
  Star,
  ArrowRight,
  Sparkles
} from 'lucide-react'

export function AIInsights() {
  const [insights, setInsights] = useState([
    {
      id: 1,
      type: 'savings_opportunity',
      title: 'Netflix Subscription Optimization',
      description: 'Found 3 better alternatives that could save you $8.99/month',
      impact: 'high',
      confidence: 94,
      estimatedSavings: 108,
      category: 'subscriptions',
      priority: 'urgent',
      actionRequired: true,
      createdAt: new Date('2024-01-15'),
      icon: Target,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      id: 2,
      type: 'spending_alert',
      title: 'Unusual Credit Card Charge',
      description: 'Detected $89.99 charge from "Premium Services" - potential unauthorized',
      impact: 'high',
      confidence: 87,
      estimatedSavings: 90,
      category: 'disputes',
      priority: 'urgent',
      actionRequired: true,
      createdAt: new Date('2024-01-14'),
      icon: AlertTriangle,
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      id: 3,
      type: 'optimization_tip',
      title: 'Internet Bill Negotiation',
      description: 'Your current plan is 23% more expensive than market rate',
      impact: 'medium',
      confidence: 91,
      estimatedSavings: 45,
      category: 'bills',
      priority: 'high',
      actionRequired: true,
      createdAt: new Date('2024-01-13'),
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      id: 4,
      type: 'market_insight',
      title: 'Insurance Rate Drop Detected',
      description: 'Your auto insurance rates dropped 15% in your area',
      impact: 'medium',
      confidence: 88,
      estimatedSavings: 180,
      category: 'bills',
      priority: 'medium',
      actionRequired: false,
      createdAt: new Date('2024-01-12'),
      icon: Shield,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ])

  const [aiStats, setAiStats] = useState({
    totalInsights: 47,
    highImpact: 12,
    automatedActions: 23,
    successRate: 94.2,
    monthlySavings: 2847,
    timeSaved: 12.5
  })

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'text-red-600 bg-red-100'
      case 'high':
        return 'text-orange-600 bg-orange-100'
      case 'medium':
        return 'text-yellow-600 bg-yellow-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high':
        return 'text-red-600'
      case 'medium':
        return 'text-yellow-600'
      case 'low':
        return 'text-green-600'
      default:
        return 'text-gray-600'
    }
  }

  return (
    <div className="space-y-8">
      {/* AI Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white"
        >
          <div className="flex items-center justify-between mb-4">
            <Brain className="w-8 h-8" />
            <span className="text-2xl font-bold">{aiStats.totalInsights}</span>
          </div>
          <div className="text-blue-100">Total AI Insights</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white"
        >
          <div className="flex items-center justify-between mb-4">
            <Zap className="w-8 h-8" />
            <span className="text-2xl font-bold">{aiStats.automatedActions}</span>
          </div>
          <div className="text-green-100">Automated Actions</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white"
        >
          <div className="flex items-center justify-between mb-4">
            <Target className="w-8 h-8" />
            <span className="text-2xl font-bold">{aiStats.successRate}%</span>
          </div>
          <div className="text-purple-100">Success Rate</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white"
        >
          <div className="flex items-center justify-between mb-4">
            <Clock className="w-8 h-8" />
            <span className="text-2xl font-bold">{aiStats.timeSaved}h</span>
          </div>
          <div className="text-orange-100">Time Saved</div>
        </motion.div>
      </div>

      {/* AI Insights List */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900">
              AI-Powered Insights
            </h3>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              <span className="text-sm text-gray-600">Updated 2 minutes ago</span>
            </div>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {insights.map((insight, index) => {
            const Icon = insight.icon
            return (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${insight.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${insight.color}`} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {insight.title}
                      </h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(insight.priority)}`}>
                        {insight.priority}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(insight.impact)} bg-gray-100`}>
                        {insight.impact} impact
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-3">
                      {insight.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-medium text-gray-900">
                            ${insight.estimatedSavings}/year
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm text-gray-600">
                            {insight.confidence}% confidence
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">
                            {insight.createdAt.toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      
                      {insight.actionRequired && (
                        <button className="flex items-center space-x-2 px-4 py-2 bg-flow-600 text-white rounded-lg hover:bg-flow-700 transition-colors">
                          <span>Take Action</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* AI Performance Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            AI Performance This Month
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Insights Generated</span>
              <span className="font-semibold text-gray-900">47</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Actions Taken</span>
              <span className="font-semibold text-gray-900">23</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Success Rate</span>
              <span className="font-semibold text-green-600">94.2%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Time Saved</span>
              <span className="font-semibold text-gray-900">12.5 hours</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Savings Impact
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Total Savings Found</span>
              <span className="font-semibold text-green-600">$2,847</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">High Impact Insights</span>
              <span className="font-semibold text-gray-900">12</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Automated Savings</span>
              <span className="font-semibold text-blue-600">$1,200</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Manual Actions</span>
              <span className="font-semibold text-orange-600">$1,647</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
