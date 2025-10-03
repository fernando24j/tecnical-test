import dotenv from 'dotenv';
import mongoose from 'mongoose';
// TODO: Descomentar cuando implementes el modelo Task
// import { Task } from './models/Task.model.js';

dotenv.config();

const seedTasks = [
  {
    title: 'Complete project documentation',
    description: 'Write comprehensive documentation for the new API endpoints',
    category: 'work',
    status: 'pending',
  },
  {
    title: 'Review pull requests',
    description: 'Review and merge pending PRs from the team',
    category: 'work',
    status: 'pending',
  },
  {
    title: 'Fix critical bug in production',
    description: 'Users are reporting issues with login functionality',
    category: 'urgent',
    status: 'completed',
  },
  {
    title: 'Update dependencies',
    description: 'Update npm packages to latest stable versions',
    category: 'work',
    status: 'pending',
  },
  {
    title: 'Grocery shopping',
    description: 'Buy milk, eggs, bread, and vegetables',
    category: 'personal',
    status: 'pending',
  },
  {
    title: 'Dentist appointment',
    description: 'Annual checkup at 3 PM',
    category: 'personal',
    status: 'completed',
  },
  {
    title: 'Deploy to staging',
    description: 'Deploy latest changes to staging environment for QA testing',
    category: 'work',
    status: 'completed',
  },
  {
    title: 'Call mom',
    description: "It's her birthday today!",
    category: 'personal',
    status: 'pending',
  },
  {
    title: 'Database backup',
    description: 'Run manual backup before major migration',
    category: 'urgent',
    status: 'completed',
  },
  {
    title: 'Team standup meeting',
    description: 'Daily standup at 9 AM',
    category: 'work',
    status: 'completed',
  },
  {
    title: 'Fix security vulnerability',
    description: 'Critical security patch needed ASAP',
    category: 'urgent',
    status: 'pending',
  },
  {
    title: 'Renew gym membership',
    description: 'Membership expires next week',
    category: 'personal',
    status: 'pending',
  },
  {
    title: 'Code review training session',
    description: 'Training for junior developers on best practices',
    category: 'work',
    status: 'pending',
  },
  {
    title: 'Schedule vacation',
    description: 'Book flights and hotel for summer vacation',
    category: 'personal',
    status: 'pending',
  },
  {
    title: 'Optimize database queries',
    description: 'Some queries are taking too long to execute',
    category: 'work',
    status: 'pending',
  },
  {
    title: 'Server maintenance',
    description: 'Scheduled maintenance window this weekend',
    category: 'urgent',
    status: 'pending',
  },
  {
    title: 'Read technical book',
    description: 'Finish reading "Clean Code" by Robert Martin',
    category: 'personal',
    status: 'pending',
  },
  {
    title: 'Client presentation',
    description: 'Present Q4 roadmap to stakeholders',
    category: 'work',
    status: 'completed',
  },
  {
    title: 'Setup monitoring alerts',
    description: 'Configure alerts for critical system metrics',
    category: 'work',
    status: 'completed',
  },
  {
    title: 'Emergency hotfix deployment',
    description: 'Critical bug affecting all users',
    category: 'urgent',
    status: 'completed',
  },
  {
    title: 'Birthday party planning',
    description: "Plan surprise party for best friend's birthday",
    category: 'personal',
    status: 'pending',
  },
  {
    title: 'Write unit tests',
    description: 'Increase test coverage to at least 80%',
    category: 'work',
    status: 'pending',
  },
  {
    title: 'Network upgrade',
    description: 'Upgrade office network infrastructure',
    category: 'urgent',
    status: 'pending',
  },
  {
    title: 'Learn new framework',
    description: 'Complete online course on Next.js',
    category: 'personal',
    status: 'pending',
  },
  {
    title: 'Refactor legacy code',
    description: 'Modernize authentication module',
    category: 'work',
    status: 'pending',
  },
  {
    title: 'Docker container optimization',
    description: 'Reduce container size and improve build times',
    category: 'work',
    status: 'completed',
  },
  {
    title: 'Car service appointment',
    description: 'Annual car maintenance check',
    category: 'personal',
    status: 'completed',
  },
  {
    title: 'API rate limiting',
    description: 'Implement rate limiting to prevent abuse',
    category: 'urgent',
    status: 'pending',
  },
  {
    title: 'Mentor junior developer',
    description: 'Weekly 1-on-1 mentoring session',
    category: 'work',
    status: 'completed',
  },
  {
    title: 'Home office setup',
    description: 'Upgrade desk and chair for better ergonomics',
    category: 'personal',
    status: 'pending',
  },
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // TODO: Descomentar cuando implementes el modelo Task
    /*
    // Clear existing tasks
    await Task.deleteMany({});
    console.log('🗑️  Cleared existing tasks');

    // Insert seed data
    const tasks = await Task.insertMany(seedTasks);
    console.log(`✅ Inserted ${tasks.length} tasks`);

    // Show some stats
    const stats = await Task.aggregate([
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 },
        },
      },
    ]);

    console.log('\n📊 Tasks by category:');
    stats.forEach((stat) => {
      console.log(`   ${stat._id}: ${stat.count}`);
    });

    const statusStats = await Task.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 },
        },
      },
    ]);

    console.log('\n📊 Tasks by status:');
    statusStats.forEach((stat) => {
      console.log(`   ${stat._id}: ${stat.count}`);
    });

    console.log('\n✨ Seed completed successfully!');
    */

    console.log('\n⚠️  Task model not implemented yet. Uncomment the code above after creating Task.model.js');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
