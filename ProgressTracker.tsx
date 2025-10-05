'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Trophy, 
  Star, 
  Target,
  Zap,
  Shield,
  DollarSign,
  Calendar,
  TrendingUp,
  Award,
  Crown,
  Flame,
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react'

export function ProgressTracker() {
  const [user, setUser] = useState({
    level: 12,
    xp: 12500,
    nextLevelXP: 15000,
    totalSaved: 2847,
    monthlySaved: 1200,
    streak: 15,
    achievements: 23,
    rank: 156
  })

  const [achievements, setAchievements] = useState([
    {
      id: 1,
      title: 'Savings Champion',
      description: 'Save $1,000 in a single month',
      icon: Trophy,
      xp: 500,
      unlocked: true,
      unlockedAt: new Date('2024-01-10'),
      progress: 100,
      maxProgress: 100,
      rarity: 'legendary',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      id: 2,
      title: 'Dispute Master',
      description: 'Win 5 disputes in a row',
      icon: Shield,
      xp: 300,
      unlocked: true,
      unlockedAt: new Date('2024-01-08'),
      progress: 100,
      maxProgress: 100,
      rarity: 'epic',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      id: 3,
      title: 'Subscription Optimizer',
      description: 'Optimize 10 subscriptions',
      icon: Target,
      xp: 200,
      unlocked: false,
      progress: 7,
      maxProgress: 10,
      rarity: 'rare',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      id: 4,
      title: 'Streak Keeper',
      description: 'Maintain a 30-day savings streak',
      icon: Flame,
      xp: 400,
      unlocked: false,
      progress: 15,
      maxProgress: 30,
      rarity: 'epic',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      id: 5,
      title: 'Deal Hunter',
      description: 'Find 20 money-saving deals',
      icon: Star,
      xp: 150,
      unlocked: false,
      progress: 12,
      maxProgress: 20,
      rarity: 'common',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    }
  ])

  const [leaderboard, setLeaderboard] = useState([
    { rank: 1, name: 'Sarah Chen', avatar: 'SC', level: 25, xp: 45000, totalSaved: 12500, streak: 45 },
    { rank: 2, name: 'Marcus Johnson', avatar: 'MJ', level: 23, xp: 42000, totalSaved: 11200, streak: 38 },
    { rank: 3, name: 'Emily Rodriguez', avatar: 'ER', level: 22, xp: 40000, totalSaved: 10800, streak: 42 },
    { rank: 4, name: 'David Kim', avatar: 'DK', level: 21, xp: 38000, totalSaved: 9500, streak: 35 },
    { rank: 5, name: 'Lisa Thompson', avatar: 'LT', level: 20, xp: 36000, totalSaved: 8900, streak: 28 },
    { rank: 6, name: 'Alex Rivera', avatar: 'AR', level: 12, xp: 12500, totalSaved: 2847, streak: 15 }
  ])

  const [recentActivity, setRecentActivity] = useState([
    {
      id: 1,
      type: 'achievement',
      title: 'Unlocked "Savings Champion" Achievement',
      description: 'You saved $1,200 this month!',
      xp: 500,
      timestamp: new Date('2024-01-15T10:30:00'),
      icon: Trophy,
      color: 'text-yellow-600'
    },
    {
      id: 2,
      type: 'savings',
      title: 'Dispute Resolution Success',
      description: 'Recovered $89.99 from unauthorized charge',
      xp: 100,
      timestamp: new Date('2024-01-14T14:20:00'),
      icon: Shield,
      color: 'text-green-600'
    },
    {
      id: 3,
      type: 'optimization',
      title: 'Subscription Optimized',
      description: 'Switched to better Netflix plan, saved $9/month',
      xp: 50,
      timestamp: new Date('2024-01-13T09:15:00'),
      icon: Target,
      color: 'text-blue-600'
    },
    {
      id: 4,
      type: 'streak',
      title: 'Streak Milestone',
      description: '15-day savings streak maintained!',
      xp: 75,
      timestamp: new Date('2024-01-12T18:45:00'),
      icon: Flame,
      color: 'text-orange-600'
    }
  ])

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary':
        return 'text-yellow-600 bg-yellow-100 border-yellow-200'
      case 'epic':
        return 'text-purple-600 bg-purple-100 border-purple-200'
      case 'rare':
        return 'text-blue-600 bg-blue-100 border-blue-200'
      case 'common':
        return 'text-green-600 bg-green-100 border-green-200'
      default:
        return 'text-gray-600 bg-gray-100 border-gray-200'
    }
  }

  const xpProgress = ((user.xp % 1000) / 1000) * 100

  return (
    <div className="space-y-8">
      {/* User Progress Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Level Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
        >
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-flow-500 to-flow-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Crown className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Level {user.level}</h3>
            <p className="text-gray-600">{user.xp.toLocaleString()} XP</p>
          </div>

          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progress to Level {user.level + 1}</span>
              <span>{Math.round(xpProgress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <motion.div
                className="h-3 bg-gradient-to-r from-flow-500 to-flow-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${xpProgress}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </div>

          <div className="text-center">
            <div className="text-sm text-gray-600">
              {user.nextLevelXP - user.xp} XP to next level
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Stats</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                <span className="text-gray-600">Total Saved</span>
              </div>
              <span className="font-semibold text-gray-900">${user.totalSaved.toLocaleString()}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Flame className="w-5 h-5 text-orange-600" />
                <span className="text-gray-600">Current Streak</span>
              </div>
              <span className="font-semibold text-gray-900">{user.streak} days</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-yellow-600" />
                <span className="text-gray-600">Achievements</span>
              </div>
              <span className="font-semibold text-gray-900">{user.achievements}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">Global Rank</span>
              </div>
              <span className="font-semibold text-gray-900">#{user.rank}</span>
            </div>
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          
          <div className="space-y-3">
            {recentActivity.slice(0, 3).map((activity, index) => {
              const Icon = activity.icon
              return (
                <div key={activity.id} className="flex items-start space-x-3">
                  <Icon className={`w-5 h-5 ${activity.color} mt-0.5`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                    <p className="text-xs text-gray-600">{activity.description}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs text-gray-500">
                        {activity.timestamp.toLocaleDateString()}
                      </span>
                      <span className="text-xs text-green-600 font-medium">
                        +{activity.xp} XP
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Achievements</h3>
          <div className="text-sm text-gray-600">
            {achievements.filter(a => a.unlocked).length} of {achievements.length} unlocked
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-4 rounded-lg border-2 ${
                  achievement.unlocked 
                    ? getRarityColor(achievement.rarity)
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-10 h-10 ${achievement.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${achievement.color}`} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      {achievement.description}
                    </p>
                    
                    {achievement.unlocked ? (
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-green-600 font-medium">
                          Unlocked {achievement.unlockedAt?.toLocaleDateString()}
                        </span>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Progress</span>
                          <span>{achievement.progress}/{achievement.maxProgress}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="h-2 bg-flow-500 rounded-full"
                            style={{ width: `${(achievement.progress / achievement.maxProgress) * 100}%` }}
                          />
                        </div>
                      </div>
                    )}
                    
                    <div className="mt-2 flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-medium text-gray-700">
                        {achievement.xp} XP
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Leaderboard */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Global Leaderboard</h3>
          <div className="text-sm text-gray-600">Updated 2 minutes ago</div>
        </div>

        <div className="space-y-3">
          {leaderboard.map((user, index) => (
            <motion.div
              key={user.rank}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex items-center space-x-4 p-4 rounded-lg ${
                user.rank <= 3 
                  ? 'bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200' 
                  : 'bg-gray-50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  user.rank === 1 ? 'bg-yellow-500 text-white' :
                  user.rank === 2 ? 'bg-gray-400 text-white' :
                  user.rank === 3 ? 'bg-orange-500 text-white' :
                  'bg-gray-200 text-gray-700'
                }`}>
                  {user.rank}
                </div>
                
                <div className="w-10 h-10 bg-gradient-to-br from-flow-500 to-flow-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {user.avatar}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h4 className="font-semibold text-gray-900">{user.name}</h4>
                  {user.rank <= 3 && (
                    <Crown className="w-4 h-4 text-yellow-500" />
                  )}
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>Level {user.level}</span>
                  <span>{user.xp.toLocaleString()} XP</span>
                  <span>{user.streak} day streak</span>
                </div>
              </div>

              <div className="text-right">
                <div className="font-semibold text-gray-900">
                  ${user.totalSaved.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Total Saved</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
