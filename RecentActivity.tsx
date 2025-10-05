'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  DollarSign, 
  TrendingUp, 
  Target, 
  Shield,
  Clock,
  CheckCircle,
  AlertTriangle,
  Star,
  Zap,
  ArrowRight,
  MoreHorizontal
} from 'lucide-react'

export function RecentActivity() {
  const [activities, setActivities] = useState([
    {
      id: 1,
      type: 'savings',
      title: 'Dispute Resolution Success',
      description: 'Recovered $89.99 from unauthorized charge to Premium Services Inc',
      amount: 89.99,
      timestamp: new Date('2024-01-15T10:30:00'),
      status: 'completed',
      icon: Shield,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      id: 2,
      type: 'optimization',
      title: 'Subscription Optimized',
      description: 'Switched to Netflix Standard plan, saving $9.00/month',
      amount: 9.00,
      timestamp: new Date('2024-01-14T14:20:00'),
      status: 'completed',
      icon: Target,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      id: 3,
      type: 'refund',
      title: 'Refund Processed',
      description: 'Received $45.99 refund from TechStore Online for returned item',
      amount: 45.99,
      timestamp: new Date('2024-01-13T09:15:00'),
      status: 'completed',
      icon: DollarSign,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      id: 4,
      type: 'bill_negotiation',
      title: 'Bill Negotiation Success',
      description: 'Negotiated internet bill from $79.99 to $59.99/month',
      amount: 20.00,
      timestamp: new Date('2024-01-12T16:45:00'),
      status: 'completed',
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      id: 5,
      type: 'deal_found',
      title: 'Deal Alert',
      description: 'Found 30% off deal on Adobe Creative Cloud subscription',
      amount: 15.90,
      timestamp: new Date('2024-01-11T11:30:00'),
      status: 'pending',
      icon: Star,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      id: 6,
      type: 'subscription_cancelled',
      title: 'Subscription Cancelled',
      description: 'Cancelled unused Spotify Premium subscription',
      amount: 9.99,
      timestamp: new Date('2024-01-10T08:20:00'),
      status: 'completed',
      icon: Target,
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    }
  ])

  const [filter, setFilter] = useState('all')

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-500" />
      case 'failed':
        return <AlertTriangle className="w-4 h-4 text-red-500" />
      default:
        return <Clock className="w-4 h-4 text-gray-500" />
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'savings':
        return 'Savings'
      case 'optimization':
        return 'Optimization'
      case 'refund':
        return 'Refund'
      case 'bill_negotiation':
        return 'Bill Negotiation'
      case 'deal_found':
        return 'Deal Found'
      case 'subscription_cancelled':
        return 'Subscription'
      default:
        return 'Activity'
    }
  }

  const filteredActivities = activities.filter(activity => {
    if (filter === 'all') return true
    return activity.type === filter
  })

  const totalSavings = activities
    .filter(a => a.status === 'completed')
    .reduce((sum, a) => sum + a.amount, 0)

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Recent Activity</h3>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-600">
            Total: ${totalSavings.toFixed(2)} saved
          </div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-flow-500 focus:border-transparent"
          >
            <option value="all">All Activities</option>
            <option value="savings">Savings</option>
            <option value="optimization">Optimization</option>
            <option value="refund">Refunds</option>
            <option value="bill_negotiation">Bill Negotiation</option>
            <option value="deal_found">Deals</option>
            <option value="subscription_cancelled">Subscriptions</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {filteredActivities.map((activity, index) => {
          const Icon = activity.icon
          return (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className={`w-10 h-10 ${activity.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <Icon className={`w-5 h-5 ${activity.color}`} />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-semibold text-gray-900">{activity.title}</h4>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    {getTypeLabel(activity.type)}
                  </span>
                  {getStatusIcon(activity.status)}
                </div>
                
                <p className="text-sm text-gray-600 mb-2">
                  {activity.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{activity.timestamp.toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>{activity.timestamp.toLocaleTimeString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-green-600">
                      +${activity.amount.toFixed(2)}
                    </span>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <MoreHorizontal className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {filteredActivities.length === 0 && (
        <div className="text-center py-8">
          <div className="text-gray-500 mb-2">No activities found</div>
          <div className="text-sm text-gray-400">Try adjusting your filters</div>
        </div>
      )}

      <div className="mt-6 pt-4 border-t border-gray-200">
        <button className="flex items-center space-x-2 text-flow-600 hover:text-flow-700 font-medium">
          <span>View All Activity</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
