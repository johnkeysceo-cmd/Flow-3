'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target, 
  Zap, 
  Crown, 
  Star,
  Trophy,
  Award,
  Heart,
  Share2,
  Brain,
  Rocket,
  Globe,
  Building2,
  Lock,
  Unlock,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  Plus,
  Minus,
  X,
  Check,
  RefreshCw,
  Play,
  Pause,
  Square,
  Settings,
  Eye,
  EyeOff,
  Download,
  Upload,
  Save,
  Edit,
  Trash2,
  Copy,
  Link,
  Mail,
  Phone,
  MapPin,
  Wifi,
  Battery,
  Signal,
  WifiOff,
  BatteryLow,
  SignalZero,
  SignalOne,
  SignalTwo,
  SignalThree,
  SignalFour,
  SignalFive,
  SignalSix,
  SignalSeven,
  SignalEight,
  SignalNine,
  SignalTen
} from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface HyperMetric {
  id: string
  name: string
  value: number
  target: number
  unit: string
  trend: 'up' | 'down' | 'stable'
  change: number
  icon: React.ComponentType<any>
  color: string
  gradient: string
  description: string
  category: 'revenue' | 'engagement' | 'viral' | 'retention' | 'savings'
}

interface HyperKPIs {
  mrr: number
  ltv: number
  cac: number
  churnRate: number
  dau: number
  mau: number
  dauMauRatio: number
  retentionRate: number
  viralCoefficient: number
  engagementScore: number
  totalSavings: number
  userSavings: number
  enterpriseRevenue: number
  nftRewards: number
  cryptoRewards: number
  socialShares: number
  referrals: number
  influencerReach: number
  enterprisePartnerships: number
  preCommitRevenue: number
  viralRevenue: number
  totalRevenue: number
}

export function HyperMetricsDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'revenue' | 'engagement' | 'viral' | 'savings'>('overview')
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | '1y'>('30d')
  const [showDetails, setShowDetails] = useState(false)

  const [hyperKPIs, setHyperKPIs] = useState<HyperKPIs>({
    mrr: 12500000,
    ltv: 15000,
    cac: 45,
    churnRate: 3.2,
    dau: 45000,
    mau: 75000,
    dauMauRatio: 60,
    retentionRate: 82,
    viralCoefficient: 2.3,
    engagementScore: 94,
    totalSavings: 25000000,
    userSavings: 50000,
    enterpriseRevenue: 5000000,
    nftRewards: 450,
    cryptoRewards: 1200,
    socialShares: 8500,
    referrals: 25000,
    influencerReach: 1200000,
    enterprisePartnerships: 15,
    preCommitRevenue: 2500000,
    viralRevenue: 5000000,
    totalRevenue: 7500000
  })

  const [metrics, setMetrics] = useState<HyperMetric[]>([
    {
      id: 'mrr',
      name: 'Monthly Recurring Revenue',
      value: 12500000,
      target: 100000000,
      unit: '$',
      trend: 'up',
      change: 25.3,
      icon: DollarSign,
      color: 'green',
      gradient: 'from-green-500 to-blue-500',
      description: 'Target: $100M+ MRR',
      category: 'revenue'
    },
    {
      id: 'dau_mau',
      name: 'DAU/MAU Ratio',
      value: 60,
      target: 60,
      unit: '%',
      trend: 'up',
      change: 5.2,
      icon: Users,
      color: 'blue',
      gradient: 'from-blue-500 to-purple-500',
      description: 'Target: 50-60%',
      category: 'engagement'
    },
    {
      id: 'retention',
      name: '6-Month Retention',
      value: 82,
      target: 85,
      unit: '%',
      trend: 'up',
      change: 3.1,
      icon: Heart,
      color: 'purple',
      gradient: 'from-purple-500 to-pink-500',
      description: 'Target: 75-85%',
      category: 'retention'
    },
    {
      id: 'viral',
      name: 'Viral Coefficient',
      value: 2.3,
      target: 2.0,
      unit: 'x',
      trend: 'up',
      change: 15.0,
      icon: Share2,
      color: 'orange',
      gradient: 'from-orange-500 to-red-500',
      description: 'Target: 1.8-2.0x',
      category: 'viral'
    },
    {
      id: 'savings',
      name: 'User Monthly Savings',
      value: 50000,
      target: 50000,
      unit: '$',
      trend: 'up',
      change: 12.5,
      icon: Target,
      color: 'emerald',
      gradient: 'from-emerald-500 to-teal-500',
      description: 'Target: $25K-$50K+',
      category: 'savings'
    },
    {
      id: 'ltv',
      name: 'Lifetime Value',
      value: 15000,
      target: 10000,
      unit: '$',
      trend: 'up',
      change: 8.7,
      icon: Crown,
      color: 'gold',
      gradient: 'from-yellow-500 to-orange-500',
      description: 'Target: $10K+',
      category: 'revenue'
    }
  ])

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-600'
      case 'down': return 'text-red-600'
      case 'stable': return 'text-gray-600'
      default: return 'text-gray-600'
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return '↗'
      case 'down': return '↘'
      case 'stable': return '→'
      default: return '→'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'revenue': return 'text-green-600 bg-green-100'
      case 'engagement': return 'text-blue-600 bg-blue-100'
      case 'viral': return 'text-orange-600 bg-orange-100'
      case 'retention': return 'text-purple-600 bg-purple-100'
      case 'savings': return 'text-emerald-600 bg-emerald-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const formatValue = (value: number, unit: string) => {
    if (unit === '$') {
      if (value >= 1000000) {
        return `$${(value / 1000000).toFixed(1)}M`
      } else if (value >= 1000) {
        return `$${(value / 1000).toFixed(1)}K`
      } else {
        return `$${value.toLocaleString()}`
      }
    } else if (unit === '%') {
      return `${value}%`
    } else if (unit === 'x') {
      return `${value}x`
    } else {
      return value.toLocaleString()
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            📊 Hyper-Ultra-Optimized Metrics
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Comprehensive tracking of all hyper-optimized KPIs and performance indicators
          </p>
          
          {/* Key Metrics Banner */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white mb-8">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">${(hyperKPIs.mrr / 1000000).toFixed(1)}M</div>
                <div className="text-purple-100">Monthly MRR</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{hyperKPIs.dauMauRatio}%</div>
                <div className="text-purple-100">DAU/MAU Ratio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{hyperKPIs.viralCoefficient}x</div>
                <div className="text-purple-100">Viral Coefficient</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">${(hyperKPIs.userSavings / 1000).toFixed(0)}K</div>
                <div className="text-purple-100">User Savings</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg overflow-x-auto">
        {[
          { id: 'overview', label: 'Overview', icon: BarChart3 },
          { id: 'revenue', label: 'Revenue', icon: DollarSign },
          { id: 'engagement', label: 'Engagement', icon: Users },
          { id: 'viral', label: 'Viral', icon: Share2 },
          { id: 'savings', label: 'Savings', icon: Target }
        ].map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center px-4 py-2 rounded-md transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-white text-purple-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Icon className="w-4 h-4 mr-2" />
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Time Range Selector */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 p-1 rounded-lg">
          {['7d', '30d', '90d', '1y'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range as any)}
              className={`px-4 py-2 rounded-md transition-all ${
                timeRange === range
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Overview Tab */}
      <AnimatePresence mode="wait">
        {activeTab === 'overview' && (
          <motion.div
            key="overview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {metrics.map((metric) => {
                const Icon = metric.icon
                const progressPercentage = (metric.value / metric.target) * 100
                
                return (
                  <motion.div
                    key={metric.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-2xl border border-gray-200 p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 bg-gradient-to-r ${metric.gradient}`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">
                            {metric.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {metric.description}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900 mb-1">
                          {formatValue(metric.value, metric.unit)}
                        </div>
                        <div className={`text-sm ${getTrendColor(metric.trend)}`}>
                          {getTrendIcon(metric.trend)} {metric.change}%
                        </div>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{Math.round(progressPercentage)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${metric.gradient} transition-all duration-500`}
                          style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                        />
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(metric.category)}`}>
                        {metric.category}
                      </span>
                      <div className="text-sm text-gray-600">
                        Target: {formatValue(metric.target, metric.unit)}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}

        {/* Revenue Tab */}
        {activeTab === 'revenue' && (
          <motion.div
            key="revenue"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <DollarSign className="w-8 h-8" />
                  <span className="text-3xl font-bold">${(hyperKPIs.mrr / 1000000).toFixed(1)}M</span>
                </div>
                <div className="text-green-100">Monthly Recurring Revenue</div>
                <div className="text-sm text-green-200">Target: $100M+</div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <Crown className="w-8 h-8" />
                  <span className="text-3xl font-bold">${(hyperKPIs.ltv / 1000).toFixed(0)}K</span>
                </div>
                <div className="text-purple-100">Lifetime Value</div>
                <div className="text-sm text-purple-200">Target: $10K+</div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Revenue Breakdown</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pre-Commit Revenue:</span>
                    <span className="font-semibold text-green-600">${(hyperKPIs.preCommitRevenue / 1000000).toFixed(1)}M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Viral Revenue:</span>
                    <span className="font-semibold text-blue-600">${(hyperKPIs.viralRevenue / 1000000).toFixed(1)}M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Enterprise Revenue:</span>
                    <span className="font-semibold text-purple-600">${(hyperKPIs.enterpriseRevenue / 1000000).toFixed(1)}M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Revenue:</span>
                    <span className="font-semibold text-orange-600">${(hyperKPIs.totalRevenue / 1000000).toFixed(1)}M</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Financial Metrics</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">CAC:</span>
                    <span className="font-semibold text-blue-600">${hyperKPIs.cac}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Churn Rate:</span>
                    <span className="font-semibold text-red-600">{hyperKPIs.churnRate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">LTV/CAC:</span>
                    <span className="font-semibold text-green-600">{Math.round(hyperKPIs.ltv / hyperKPIs.cac)}x</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gross Margin:</span>
                    <span className="font-semibold text-purple-600">85%</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Growth Metrics</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">MRR Growth:</span>
                    <span className="font-semibold text-green-600">+25.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">ARR Growth:</span>
                    <span className="font-semibold text-blue-600">+30.1%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Revenue Growth:</span>
                    <span className="font-semibold text-purple-600">+35.7%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Profit Margin:</span>
                    <span className="font-semibold text-orange-600">42%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Engagement Tab */}
        {activeTab === 'engagement' && (
          <motion.div
            key="engagement"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <Users className="w-8 h-8" />
                  <span className="text-3xl font-bold">{hyperKPIs.dauMauRatio}%</span>
                </div>
                <div className="text-blue-100">DAU/MAU Ratio</div>
                <div className="text-sm text-blue-200">Target: 50-60%</div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <Heart className="w-8 h-8" />
                  <span className="text-3xl font-bold">{hyperKPIs.retentionRate}%</span>
                </div>
                <div className="text-purple-100">Retention Rate</div>
                <div className="text-sm text-purple-200">Target: 75-85%</div>
              </div>
              
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <Zap className="w-8 h-8" />
                  <span className="text-3xl font-bold">{hyperKPIs.engagementScore}%</span>
                </div>
                <div className="text-green-100">Engagement Score</div>
                <div className="text-sm text-green-200">Target: 90%+</div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <Target className="w-8 h-8" />
                  <span className="text-3xl font-bold">{hyperKPIs.dau.toLocaleString()}</span>
                </div>
                <div className="text-orange-100">Daily Active Users</div>
                <div className="text-sm text-orange-200">Target: 50K+</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">User Activity</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Daily Active Users:</span>
                    <span className="font-semibold text-blue-600">{hyperKPIs.dau.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly Active Users:</span>
                    <span className="font-semibold text-green-600">{hyperKPIs.mau.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Session Duration:</span>
                    <span className="font-semibold text-purple-600">18.5 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Actions per Session:</span>
                    <span className="font-semibold text-orange-600">12.3</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Retention Metrics</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">1-Month Retention:</span>
                    <span className="font-semibold text-green-600">95%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">3-Month Retention:</span>
                    <span className="font-semibold text-blue-600">88%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">6-Month Retention:</span>
                    <span className="font-semibold text-purple-600">{hyperKPIs.retentionRate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">12-Month Retention:</span>
                    <span className="font-semibold text-orange-600">75%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Viral Tab */}
        {activeTab === 'viral' && (
          <motion.div
            key="viral"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <Share2 className="w-8 h-8" />
                  <span className="text-3xl font-bold">{hyperKPIs.viralCoefficient}x</span>
                </div>
                <div className="text-orange-100">Viral Coefficient</div>
                <div className="text-sm text-orange-200">Target: 1.8-2.0x</div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <Users className="w-8 h-8" />
                  <span className="text-3xl font-bold">{(hyperKPIs.referrals / 1000).toFixed(0)}K</span>
                </div>
                <div className="text-blue-100">Total Referrals</div>
                <div className="text-sm text-blue-200">Target: 50K+</div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <Globe className="w-8 h-8" />
                  <span className="text-3xl font-bold">{(hyperKPIs.influencerReach / 1000000).toFixed(1)}M</span>
                </div>
                <div className="text-purple-100">Influencer Reach</div>
                <div className="text-sm text-purple-200">Target: 1M+</div>
              </div>
              
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <Building2 className="w-8 h-8" />
                  <span className="text-3xl font-bold">{hyperKPIs.enterprisePartnerships}</span>
                </div>
                <div className="text-green-100">Enterprise Partnerships</div>
                <div className="text-sm text-green-200">Target: 20+</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Viral Performance</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Social Shares:</span>
                    <span className="font-semibold text-blue-600">{hyperKPIs.socialShares.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Referral Rate:</span>
                    <span className="font-semibold text-green-600">35%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Conversion Rate:</span>
                    <span className="font-semibold text-purple-600">28%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Viral Revenue:</span>
                    <span className="font-semibold text-orange-600">${(hyperKPIs.viralRevenue / 1000000).toFixed(1)}M</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Rewards & Incentives</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">NFT Rewards:</span>
                    <span className="font-semibold text-yellow-600">{hyperKPIs.nftRewards.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Crypto Rewards:</span>
                    <span className="font-semibold text-green-600">${hyperKPIs.cryptoRewards.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Referral Rewards:</span>
                    <span className="font-semibold text-blue-600">$2,500 avg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Rewards:</span>
                    <span className="font-semibold text-purple-600">$5.2M</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Savings Tab */}
        {activeTab === 'savings' && (
          <motion.div
            key="savings"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <Target className="w-8 h-8" />
                  <span className="text-3xl font-bold">${(hyperKPIs.userSavings / 1000).toFixed(0)}K</span>
                </div>
                <div className="text-emerald-100">User Monthly Savings</div>
                <div className="text-sm text-emerald-200">Target: $25K-$50K+</div>
              </div>
              
              <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <DollarSign className="w-8 h-8" />
                  <span className="text-3xl font-bold">${(hyperKPIs.totalSavings / 1000000).toFixed(1)}M</span>
                </div>
                <div className="text-green-100">Total Savings</div>
                <div className="text-sm text-green-200">All Users Combined</div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <Brain className="w-8 h-8" />
                  <span className="text-3xl font-bold">94%</span>
                </div>
                <div className="text-purple-100">AI Optimization</div>
                <div className="text-sm text-purple-200">Success Rate</div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <Zap className="w-8 h-8" />
                  <span className="text-3xl font-bold">2.3x</span>
                </div>
                <div className="text-orange-100">Savings Multiplier</div>
                <div className="text-sm text-orange-200">AI Enhancement</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Savings Breakdown</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subscription Optimization:</span>
                    <span className="font-semibold text-blue-600">$15,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bill Negotiation:</span>
                    <span className="font-semibold text-green-600">$12,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dispute Resolution:</span>
                    <span className="font-semibold text-purple-600">$8,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">AI Arbitrage:</span>
                    <span className="font-semibold text-orange-600">$15,000</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Optimization Metrics</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Automation Rate:</span>
                    <span className="font-semibold text-green-600">87%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Success Rate:</span>
                    <span className="font-semibold text-blue-600">94%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time Saved:</span>
                    <span className="font-semibold text-purple-600">40 hours/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">ROI:</span>
                    <span className="font-semibold text-orange-600">1,200%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
