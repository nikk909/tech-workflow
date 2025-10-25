import React from 'react';
import { Layout, Menu, Button, Input, Row, Col, Card, Statistic, Avatar, Badge, Dropdown, Space, Typography, Progress, Table, Tag, Select, DatePicker, Form, Modal, Tabs, Timeline, Alert, Switch, Divider, Tooltip } from 'antd';
import { 
  PlusOutlined, 
  ProjectOutlined, 
  SearchOutlined, 
  DashboardOutlined, 
  MenuUnfoldOutlined, 
  MenuFoldOutlined,
  BellOutlined,
  UserOutlined,
  CalendarOutlined,
  TeamOutlined,
  CheckCircleOutlined,
  BarChartOutlined,
  PieChartOutlined,
  LineChartOutlined,
  SettingOutlined,
  FileTextOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  WarningOutlined,
  ClockCircleOutlined,
  ExclamationCircleOutlined,
  ThunderboltOutlined,
  FilterOutlined,
  DownloadOutlined,
  UploadOutlined,
  ExportOutlined,
  ImportOutlined
} from '@ant-design/icons';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
import './App.css';

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;
const { TabPane } = Tabs;
const { Option } = Select;

// 模拟数据 - 根据PRD文档设计
const projectData = [
  { month: '1月', value: 12, target: 15 },
  { month: '2月', value: 18, target: 20 },
  { month: '3月', value: 25, target: 25 },
  { month: '4月', value: 32, target: 30 },
  { month: '5月', value: 28, target: 35 },
  { month: '6月', value: 35, target: 40 }
];

const taskStatusData = [
  { name: '进行中', value: 45, color: '#1890ff' },
  { name: '已完成', value: 30, color: '#52c41a' },
  { name: '未开始', value: 15, color: '#d9d9d9' },
  { name: '已暂停', value: 10, color: '#ff4d4f' }
];

const teamPerformanceData = [
  { name: '张经理', tasks: 8, completion: 85 },
  { name: '王主管', tasks: 6, completion: 92 },
  { name: '李总', tasks: 10, completion: 78 },
  { name: '陈工', tasks: 7, completion: 88 },
  { name: '刘工', tasks: 5, completion: 95 }
];

// 项目数据 - 根据PRD要求
const demoProjects = [
  { 
    id: 1, 
    name: '智慧园区建设', 
    status: '进行中', 
    department: '研发部',
    leader: '张经理', 
    rate: 80, 
    desc: '智慧园区项目，智能硬件、App、云平台协同', 
    priority: 'high', 
    team: 8,
    startDate: '2024-01-15',
    endDate: '2024-06-30',
    actualStartDate: '2024-01-15',
    actualEndDate: null,
    dependencies: ['需求分析', '技术选型'],
    milestones: ['原型完成', '测试通过', '上线部署'],
    members: ['张经理', '李工', '王工', '陈工'],
    riskLevel: 'medium'
  },
  { 
    id: 2, 
    name: '新营销平台', 
    status: '规划中', 
    department: '市场部',
    leader: '王主管', 
    rate: 0, 
    desc: '整合企业线上营销全渠道，推进后端融合', 
    priority: 'medium', 
    team: 5,
    startDate: '2024-03-01',
    endDate: '2024-08-31',
    actualStartDate: null,
    actualEndDate: null,
    dependencies: ['市场调研'],
    milestones: ['需求确认', '设计完成', '开发完成'],
    members: ['王主管', '刘工', '赵工'],
    riskLevel: 'low'
  },
  { 
    id: 3, 
    name: '研发效率提升', 
    status: '已完成', 
    department: '研发部',
    leader: '李总', 
    rate: 100, 
    desc: 'CI/CD全流程工具链落地', 
    priority: 'low', 
    team: 12,
    startDate: '2023-10-01',
    endDate: '2023-12-31',
    actualStartDate: '2023-10-01',
    actualEndDate: '2023-12-25',
    dependencies: [],
    milestones: ['工具选型', '环境搭建', '流程优化'],
    members: ['李总', '张工', '王工', '陈工', '刘工'],
    riskLevel: 'low'
  }
];

// 任务数据 - 根据PRD要求
const demoTasks = [
  {
    id: 1,
    projectId: 1,
    name: '需求分析',
    status: '已完成',
    assignee: '张经理',
    priority: 'high',
    progress: 100,
    startDate: '2024-01-15',
    endDate: '2024-02-15',
    actualStartDate: '2024-01-15',
    actualEndDate: '2024-02-10',
    estimatedHours: 80,
    actualHours: 75,
    description: '完成智慧园区项目的详细需求分析',
    dependencies: [],
    attachments: ['需求文档.pdf', '用户调研报告.docx']
  },
  {
    id: 2,
    projectId: 1,
    name: '系统设计',
    status: '进行中',
    assignee: '李工',
    priority: 'high',
    progress: 65,
    startDate: '2024-02-01',
    endDate: '2024-03-15',
    actualStartDate: '2024-02-01',
    actualEndDate: null,
    estimatedHours: 120,
    actualHours: 78,
    description: '完成系统架构设计和数据库设计',
    dependencies: ['需求分析'],
    attachments: ['系统架构图.png']
  },
  {
    id: 3,
    projectId: 1,
    name: '前端开发',
    status: '进行中',
    assignee: '王工',
    priority: 'medium',
    progress: 40,
    startDate: '2024-03-01',
    endDate: '2024-05-15',
    actualStartDate: '2024-03-01',
    actualEndDate: null,
    estimatedHours: 200,
    actualHours: 80,
    description: '开发智慧园区管理平台前端界面',
    dependencies: ['系统设计'],
    attachments: []
  },
  {
    id: 4,
    projectId: 2,
    name: '市场调研',
    status: '未开始',
    assignee: '王主管',
    priority: 'medium',
    progress: 0,
    startDate: '2024-03-01',
    endDate: '2024-03-31',
    actualStartDate: null,
    actualEndDate: null,
    estimatedHours: 40,
    actualHours: 0,
    description: '调研目标用户群体和竞品分析',
    dependencies: [],
    attachments: []
  }
];

// 预警数据 - 根据PRD要求
const alerts = [
  {
    id: 1,
    type: 'delay',
    title: '前端开发任务延期预警',
    message: '任务"前端开发"预计延期3天，当前进度40%，建议调整资源',
    project: '智慧园区建设',
    task: '前端开发',
    severity: 'high',
    time: '2024-03-20 10:30',
    status: 'active'
  },
  {
    id: 2,
    type: 'risk',
    title: '项目完成率低于预期',
    message: '智慧园区建设项目整体完成率65%，低于计划80%',
    project: '智慧园区建设',
    task: null,
    severity: 'medium',
    time: '2024-03-19 14:20',
    status: 'active'
  },
  {
    id: 3,
    type: 'dependency',
    title: '依赖任务阻塞',
    message: '系统设计任务依赖需求分析，但需求分析已完成',
    project: '智慧园区建设',
    task: '系统设计',
    severity: 'low',
    time: '2024-03-18 09:15',
    status: 'resolved'
  }
];

// 用户信息数据 - 根据PRD要求
const currentUser = {
  id: 1,
  name: '张经理',
  role: '项目经理',
  department: '研发部',
  avatar: null,
  email: 'zhang.manager@company.com',
  phone: '138-0000-0000',
  permissions: ['project_create', 'project_edit', 'task_assign', 'report_view'],
  lastLogin: '2024-03-20 09:30',
  status: 'active'
};

// 通知数据
const notifications = [
  { id: 1, title: '电商平台项目可能延期2天', time: '5分钟前', type: 'warning' },
  { id: 2, title: '您有一个新的任务需要处理', time: '1小时前', type: 'info' },
  { id: 3, title: 'CRM系统第一阶段已完成', time: '2小时前', type: 'success' }
];

// 甘特图数据
const ganttData = [
  {
    name: '智慧园区建设',
    tasks: [
      { name: '需求分析', start: '2024-01-15', end: '2024-02-15', progress: 100 },
      { name: '系统设计', start: '2024-02-01', end: '2024-03-15', progress: 65 },
      { name: '前端开发', start: '2024-03-01', end: '2024-05-15', progress: 40 },
      { name: '后端开发', start: '2024-03-15', end: '2024-05-30', progress: 30 },
      { name: '测试部署', start: '2024-05-15', end: '2024-06-30', progress: 0 }
    ]
  }
];

function App() {
  const [collapsed, setCollapsed] = React.useState(false);
  const [currentView, setCurrentView] = React.useState('dashboard');
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [showUserInfo, setShowUserInfo] = React.useState(false);

  // WCAG AA 级对比度优化 - 状态颜色映射
  const getStatusColor = (status) => {
    switch(status) {
      case '进行中': return 'blue';      // 蓝色 - 进行中
      case '已完成': return 'green';     // 绿色 - 已完成
      case '规划中': return 'gold';      // 黄色 - 规划中
      case '未开始': return 'red';       // 红色 - 未开始
      default: return 'default';
    }
  };

  // WCAG AA 级对比度优化 - 优先级颜色映射
  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'orange';      // 橙色 - 高优先级
      case 'medium': return 'gold';      // 黄色 - 中优先级
      case 'low': return 'green';        // 绿色 - 低优先级
      default: return 'default';
    }
  };

  const notificationMenu = (
    <div style={{ 
      width: 300, 
      padding: '8px 0',
      background: 'var(--glass-bg)',
      backdropFilter: 'blur(15px)',
      border: '1px solid var(--glass-border)',
      boxShadow: 'var(--neon-glow)',
      borderRadius: '12px'
    }}>
      {notifications.map(notification => (
        <div key={notification.id} style={{ 
          padding: '12px 16px', 
          borderBottom: '1px solid var(--glass-border)', 
          cursor: 'pointer',
          color: 'var(--text-primary)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(34, 211, 238, 0.1)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
        >
          <div style={{ fontWeight: 500, marginBottom: 4, color: 'var(--text-primary)' }}>{notification.title}</div>
          <div style={{ color: 'var(--text-secondary)', fontSize: 12 }}>{notification.time}</div>
        </div>
      ))}
      <div style={{ padding: '8px 16px', textAlign: 'center', borderTop: '1px solid var(--glass-border)' }}>
        <Button type="link" size="small">查看所有通知</Button>
      </div>
    </div>
  );

  const userMenu = (
    <div style={{ 
      width: 200, 
      padding: '8px 0',
      background: 'var(--glass-bg)',
      backdropFilter: 'blur(15px)',
      border: '1px solid var(--glass-border)',
      boxShadow: 'var(--neon-glow)',
      borderRadius: '12px'
    }}>
      <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--glass-border)' }}>
        <div style={{ fontWeight: 500, marginBottom: 4, color: 'var(--text-primary)' }}>{currentUser.name}</div>
        <div style={{ color: 'var(--text-secondary)', fontSize: 12 }}>{currentUser.role} · {currentUser.department}</div>
      </div>
      <div style={{ padding: '8px 0' }}>
        <div style={{ padding: '8px 16px', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--text-primary)', transition: 'all 0.3s ease' }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(34, 211, 238, 0.1)'; e.currentTarget.style.color = 'var(--primary-cyan)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-primary)'; }}>
          <UserOutlined style={{ marginRight: 8 }} />
          个人资料
        </div>
        <div style={{ padding: '8px 16px', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--text-primary)', transition: 'all 0.3s ease' }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(34, 211, 238, 0.1)'; e.currentTarget.style.color = 'var(--primary-cyan)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-primary)'; }}>
          <SettingOutlined style={{ marginRight: 8 }} />
          账户设置
        </div>
        <div style={{ padding: '8px 16px', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--text-primary)', transition: 'all 0.3s ease' }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(34, 211, 238, 0.1)'; e.currentTarget.style.color = 'var(--primary-cyan)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-primary)'; }}>
          <BellOutlined style={{ marginRight: 8 }} />
          通知设置
        </div>
        <div style={{ padding: '8px 16px', cursor: 'pointer', display: 'flex', alignItems: 'center', color: '#ff4d4f', transition: 'all 0.3s ease' }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}>
          退出登录
        </div>
      </div>
    </div>
  );

  // 用户信息侧边栏
  const renderUserInfo = () => (
    <div style={{ 
      position: 'fixed', 
      left: collapsed ? 0 : 200, 
      top: 64, 
      width: 300, 
      height: 'calc(100vh - 64px)', 
      background: 'var(--glass-bg)', 
      backdropFilter: 'blur(15px)',
      border: '1px solid var(--glass-border)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.3), var(--neon-glow)',
      zIndex: 1000,
      transition: 'left 0.3s ease',
      padding: '24px',
      overflow: 'auto'
    }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
          <Avatar size={64} icon={<UserOutlined />} style={{ marginRight: 16 }} />
          <div>
            <div style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 4, color: 'var(--text-primary)' }}>{currentUser.name}</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: 14 }}>{currentUser.role}</div>
            <div style={{ color: 'var(--text-muted)', fontSize: 12 }}>{currentUser.department}</div>
          </div>
        </div>
        
        <Card title="基本信息" size="small" style={{ marginBottom: 16 }}>
          <div style={{ marginBottom: 8 }}>
            <Text strong style={{ color: 'var(--text-primary)' }}>邮箱：</Text>
            <div style={{ color: 'var(--text-secondary)' }}>{currentUser.email}</div>
          </div>
          <div style={{ marginBottom: 8 }}>
            <Text strong style={{ color: 'var(--text-primary)' }}>电话：</Text>
            <div style={{ color: 'var(--text-secondary)' }}>{currentUser.phone}</div>
          </div>
          <div style={{ marginBottom: 8 }}>
            <Text strong style={{ color: 'var(--text-primary)' }}>最后登录：</Text>
            <div style={{ color: 'var(--text-secondary)' }}>{currentUser.lastLogin}</div>
          </div>
          <div>
            <Text strong style={{ color: 'var(--text-primary)' }}>状态：</Text>
            <Tag color="green">在线</Tag>
          </div>
        </Card>

        <Card title="权限信息" size="small" style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {currentUser.permissions.map(permission => (
              <Tag key={permission} color="blue" style={{ fontSize: 11 }}>
                {permission.replace('_', ' ')}
              </Tag>
            ))}
          </div>
        </Card>

        <Card title="我的项目" size="small">
          <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
            <div style={{ marginBottom: 8 }}>负责项目：3 个</div>
            <div style={{ marginBottom: 8 }}>参与项目：5 个</div>
            <div>完成任务：12 个</div>
          </div>
        </Card>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div style={{ padding: '24px' }}>
      {/* 统计卡片 */}
      <Row gutter={[24, 24]} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic
              title="总项目数"
              value={24}
              prefix={<CalendarOutlined />}
              suffix={
                <span style={{ color: '#52c41a', fontSize: 12 }}>+12% 较上月</span>
              }
            />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic
              title="活跃任务"
              value={156}
              prefix={<CheckCircleOutlined />}
              suffix={
                <span style={{ color: '#1890ff', fontSize: 12 }}>+8% 较上周</span>
              }
            />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic
              title="团队成员"
              value={32}
              prefix={<TeamOutlined />}
              suffix="活跃成员"
            />
          </Card>
        </Col>
      </Row>

      {/* 图表区域 */}
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={16}>
          <Card title="项目进度趋势" extra={<LineChartOutlined />}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={projectData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <RechartsTooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey="value" stroke="#1890ff" strokeWidth={2} />
                <Line type="monotone" dataKey="target" stroke="#52c41a" strokeWidth={2} strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title="任务状态分布" extra={<PieChartOutlined />}>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={taskStatusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  dataKey="value"
                >
                  {taskStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <RechartsTooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div style={{ marginTop: 16 }}>
              {taskStatusData.map(item => (
                <div key={item.name} style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                  <div style={{ width: 12, height: 12, backgroundColor: item.color, marginRight: 8, borderRadius: 2 }}></div>
                  <span>{item.name}: {item.value}%</span>
                </div>
              ))}
            </div>
          </Card>
        </Col>
      </Row>

      {/* 团队绩效 */}
      <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
        <Col xs={24}>
          <Card title="团队绩效排行" extra={<BarChartOutlined />}>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={teamPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <RechartsTooltip content={<CustomTooltip />} />
                <Bar dataKey="tasks" fill="#1890ff" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    </div>
  );

  const renderProjects = () => (
    <div style={{ padding: '24px' }}>
      <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Title level={3}>项目管理</Title>
        <Button type="primary" icon={<PlusOutlined />} onClick={() => setIsModalVisible(true)}>新建项目</Button>
      </div>
      
      {/* 项目筛选 */}
      <Card style={{ marginBottom: 24 }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={8}>
            <Select placeholder="选择部门" style={{ width: '100%' }} allowClear>
              <Option value="研发部">研发部</Option>
              <Option value="市场部">市场部</Option>
              <Option value="运营部">运营部</Option>
            </Select>
          </Col>
          <Col xs={24} sm={8}>
            <Select placeholder="选择状态" style={{ width: '100%' }} allowClear>
              <Option value="进行中">进行中</Option>
              <Option value="已完成">已完成</Option>
              <Option value="规划中">规划中</Option>
            </Select>
          </Col>
          <Col xs={24} sm={8}>
            <Button icon={<FilterOutlined />}>筛选</Button>
            <Button icon={<ExportOutlined />} style={{ marginLeft: 8 }}>导出</Button>
          </Col>
        </Row>
      </Card>

      <Row gutter={[24, 24]}>
        {demoProjects.map(project => (
          <Col xs={24} sm={12} lg={8} key={project.id}>
            <Card
              hoverable
              style={{ borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.1)' }}
              title={
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 'bold' }}>{project.name}</span>
                  <Badge 
                    color={getStatusColor(project.status)} 
                    text={project.status}
                    style={{ fontSize: 12 }}
                  />
                </div>
              }
              extra={
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ 
                    width: 8, 
                    height: 8, 
                    borderRadius: '50%', 
                    backgroundColor: getPriorityColor(project.priority) 
                  }}></div>
                  <span style={{ color: '#1890ff', fontSize: 12 }}>完成率 {project.rate}%</span>
                </div>
              }
              actions={[
                <Button type="link" icon={<EyeOutlined />} onClick={() => setSelectedProject(project)}>查看</Button>,
                <Button type="link" icon={<EditOutlined />}>编辑</Button>,
                <Button type="link" icon={<DeleteOutlined />} danger>删除</Button>
              ]}
            >
              <div style={{ marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                  <Avatar size="small" icon={<UserOutlined />} style={{ marginRight: 8 }} />
                  <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>负责人：{project.leader}</span>
                  <Tag color="blue" style={{ marginLeft: 8 }}>{project.department}</Tag>
                </div>
                <div style={{ color: 'var(--text-primary)', fontSize: 13, marginBottom: 12, fontWeight: 400 }}>{project.desc}</div>
                <Progress percent={project.rate} size="small" />
                <div style={{ marginTop: 8, fontSize: 12, color: 'var(--text-secondary)' }}>
                  <div>开始时间：{project.startDate}</div>
                  <div>结束时间：{project.endDate}</div>
                  <div>里程碑：{project.milestones.length} 个</div>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );

  // 任务管理模块
  const renderTasks = () => {
    const taskColumns = [
      {
        title: '任务名称',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => (
          <div style={{ 
            background: 'linear-gradient(135deg, #0A0F1E 0%, #0F172A 100%)', 
            padding: '10px 12px', 
            borderRadius: '6px', 
            border: '1px solid #67E8F9',
            boxShadow: '0 0 12px rgba(103, 232, 249, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
          }}>
            <div style={{ 
              fontWeight: 700, 
              color: '#FFFFFF', 
              fontSize: 15, 
              lineHeight: '1.5',
              textShadow: '0 0 8px rgba(103, 232, 249, 0.6), 0 2px 4px rgba(0, 0, 0, 0.8)',
              letterSpacing: '0.3px'
            }}>{text}</div>
            <div style={{ 
              fontSize: 12, 
              color: '#F1F5F9', 
              marginTop: 6,
              lineHeight: '1.4',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.6)'
            }}>{record.description}</div>
          </div>
        )
      },
      {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        render: (status) => (
          <Tag color={getStatusColor(status)}>{status}</Tag>
        )
      },
      {
        title: '负责人',
        dataIndex: 'assignee',
        key: 'assignee',
        render: (assignee) => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar size="small" icon={<UserOutlined />} style={{ marginRight: 8 }} />
            {assignee}
          </div>
        )
      },
      {
        title: '进度',
        dataIndex: 'progress',
        key: 'progress',
        render: (progress) => (
          <Progress percent={progress} size="small" />
        )
      },
      {
        title: '优先级',
        dataIndex: 'priority',
        key: 'priority',
        render: (priority) => (
          <Tag color={getPriorityColor(priority)}>{priority}</Tag>
        )
      },
      {
        title: '操作',
        key: 'action',
        render: (_, record) => (
          <Space>
            <Button type="link" size="small" icon={<EditOutlined />}>编辑</Button>
            <Button type="link" size="small" icon={<EyeOutlined />}>查看</Button>
          </Space>
        )
      }
    ];

    return (
      <div style={{ padding: '24px' }}>
        <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Title level={3}>任务管理</Title>
          <Button type="primary" icon={<PlusOutlined />}>新建任务</Button>
        </div>

        <Tabs defaultActiveKey="all">
          <TabPane tab="全部任务" key="all">
            <Table 
              columns={taskColumns} 
              dataSource={demoTasks} 
              rowKey="id"
              pagination={{ pageSize: 10 }}
            />
          </TabPane>
          <TabPane tab="我的任务" key="my">
            <Table 
              columns={taskColumns} 
              dataSource={demoTasks.filter(task => task.assignee === '张经理')} 
              rowKey="id"
              pagination={{ pageSize: 10 }}
            />
          </TabPane>
          <TabPane tab="进行中" key="progress">
            <Table 
              columns={taskColumns} 
              dataSource={demoTasks.filter(task => task.status === '进行中')} 
              rowKey="id"
              pagination={{ pageSize: 10 }}
            />
          </TabPane>
        </Tabs>
      </div>
    );
  };

  // 自定义图表工具提示样式
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(15px)',
          border: '1px solid var(--glass-border)',
          boxShadow: 'var(--neon-glow)',
          borderRadius: '8px',
          padding: '12px',
          color: 'var(--text-primary)',
          fontSize: '13px',
          fontWeight: '500'
        }}>
          <p style={{ margin: '0 0 8px 0', color: 'var(--text-primary)', fontWeight: '600' }}>
            {label}
          </p>
          {payload.map((entry, index) => (
            <p key={index} style={{ margin: '4px 0', color: 'var(--text-primary)' }}>
              <span style={{ color: entry.color, marginRight: '8px' }}>●</span>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  // 数据分析模块
  const renderAnalytics = () => (
    <div style={{ padding: '24px' }}>
      <Title level={3}>数据分析</Title>
      
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={12}>
          <Card title="项目完成率趋势" extra={<LineChartOutlined />}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={projectData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <RechartsTooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey="value" stroke="#1890ff" strokeWidth={2} />
                <Line type="monotone" dataKey="target" stroke="#52c41a" strokeWidth={2} strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="任务状态分布" extra={<PieChartOutlined />}>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={taskStatusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  dataKey="value"
                >
                  {taskStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <RechartsTooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
        <Col xs={24}>
          <Card title="团队绩效分析" extra={<BarChartOutlined />}>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={teamPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <RechartsTooltip content={<CustomTooltip />} />
                <Bar dataKey="tasks" fill="#1890ff" />
                <Bar dataKey="completion" fill="#52c41a" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
        <Col xs={24} lg={12}>
          <Card title="甘特图" extra={<CalendarOutlined />}>
            <div style={{ height: 200, overflow: 'auto' }}>
              {ganttData[0].tasks.map((task, index) => (
                <div key={index} style={{ 
                  marginBottom: 8, 
                  padding: 12, 
                  background: 'rgba(15, 23, 42, 0.6)', 
                  borderRadius: 8,
                  border: '1px solid var(--glass-border)',
                  boxShadow: '0 0 10px rgba(34, 211, 238, 0.1)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#FFFFFF', fontWeight: 600, textShadow: '0 0 3px rgba(34, 211, 238, 0.3)' }}>{task.name}</span>
                    <span style={{ fontSize: 12, color: '#22D3EE', fontWeight: 500 }}>{task.start} - {task.end}</span>
                  </div>
                  <Progress percent={task.progress} size="small" style={{ marginTop: 4 }} />
                </div>
              ))}
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="预警统计" extra={<WarningOutlined />}>
            <div style={{ height: 200, overflow: 'auto' }}>
              {alerts.map(alert => (
                <Alert
                  key={alert.id}
                  message={alert.title}
                  description={alert.message}
                  type={alert.severity === 'high' ? 'error' : alert.severity === 'medium' ? 'warning' : 'info'}
                  showIcon
                  style={{ marginBottom: 8 }}
                />
              ))}
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );

  // 系统设置模块
  const renderSettings = () => (
    <div style={{ padding: '24px' }}>
      <Title level={3}>系统设置</Title>
      
      <Tabs defaultActiveKey="user">
        <TabPane tab="用户管理" key="user">
          <Card title="用户权限管理">
            <Table
              columns={[
                { 
                  title: '用户名', 
                  dataIndex: 'name', 
                  key: 'name',
                  render: (text) => (
                    <div style={{ 
                      display: 'inline-block',
                      background: 'linear-gradient(135deg, #0A0F1E 0%, #0F172A 100%)', 
                      padding: '6px 12px', 
                      borderRadius: '6px',
                      border: '1px solid #67E8F9',
                      boxShadow: '0 0 10px rgba(103, 232, 249, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                    }}>
                      <span style={{ 
                        color: '#FFFFFF', 
                        fontWeight: 700, 
                        fontSize: 14,
                        textShadow: '0 0 8px rgba(103, 232, 249, 0.6), 0 2px 4px rgba(0, 0, 0, 0.8)',
                        letterSpacing: '0.5px'
                      }}>{text}</span>
                    </div>
                  )
                },
                { 
                  title: '角色', 
                  dataIndex: 'role', 
                  key: 'role',
                  render: (text) => (
                    <span style={{ 
                      color: '#FFFFFF', 
                      fontWeight: 600,
                      fontSize: 13,
                      textShadow: '0 1px 3px rgba(0, 0, 0, 0.8)'
                    }}>{text}</span>
                  )
                },
                { 
                  title: '部门', 
                  dataIndex: 'department', 
                  key: 'department',
                  render: (text) => (
                    <span style={{ 
                      color: '#F1F5F9', 
                      fontWeight: 600,
                      fontSize: 13,
                      textShadow: '0 1px 3px rgba(0, 0, 0, 0.8)'
                    }}>{text}</span>
                  )
                },
                { 
                  title: '状态', 
                  dataIndex: 'status', 
                  key: 'status', 
                  render: (status) => <Tag color={status === 'active' ? 'green' : 'red'}>{status}</Tag> 
                },
                { 
                  title: '操作', 
                  key: 'action', 
                  render: () => (
                    <Button 
                      type="link" 
                      style={{ 
                        color: '#67E8F9', 
                        fontWeight: 700,
                        fontSize: 13,
                        textShadow: '0 0 8px rgba(103, 232, 249, 0.6), 0 1px 3px rgba(0, 0, 0, 0.8)',
                        padding: '4px 12px'
                      }}
                    >
                      编辑
                    </Button>
                  )
                }
              ]}
              dataSource={[
                { key: 1, name: '张经理', role: '管理员', department: '研发部', status: 'active' },
                { key: 2, name: '王主管', role: '项目经理', department: '市场部', status: 'active' },
                { key: 3, name: '李总', role: '管理员', department: '研发部', status: 'active' }
              ]}
            />
          </Card>
        </TabPane>
        
        <TabPane tab="系统配置" key="system">
          <Card title="预警设置">
            <Form layout="vertical">
              <Form.Item label="延期预警阈值（天）">
                <Input placeholder="3" />
              </Form.Item>
              <Form.Item label="完成率预警阈值（%）">
                <Input placeholder="80" />
              </Form.Item>
              <Form.Item label="自动发送邮件">
                <Switch defaultChecked />
              </Form.Item>
              <Form.Item>
                <Button type="primary">保存设置</Button>
              </Form.Item>
            </Form>
          </Card>
        </TabPane>
        
        <TabPane tab="数据备份" key="backup">
          <Card title="数据管理">
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={8}>
                <Card>
                  <div style={{ textAlign: 'center' }}>
                    <DownloadOutlined style={{ fontSize: 24, color: '#1890ff' }} />
                    <div style={{ marginTop: 8 }}>导出数据</div>
                    <Button type="primary" style={{ marginTop: 8 }}>导出</Button>
                  </div>
                </Card>
              </Col>
              <Col xs={24} sm={8}>
                <Card>
                  <div style={{ textAlign: 'center' }}>
                    <UploadOutlined style={{ fontSize: 24, color: '#52c41a' }} />
                    <div style={{ marginTop: 8 }}>导入数据</div>
                    <Button style={{ marginTop: 8 }}>导入</Button>
                  </div>
                </Card>
              </Col>
              <Col xs={24} sm={8}>
                <Card>
                  <div style={{ textAlign: 'center' }}>
                    <ThunderboltOutlined style={{ fontSize: 24, color: '#faad14' }} />
                    <div style={{ marginTop: 8 }}>系统状态</div>
                    <Tag color="green" style={{ marginTop: 8 }}>正常运行</Tag>
                  </div>
                </Card>
              </Col>
            </Row>
          </Card>
        </TabPane>
      </Tabs>
    </div>
  );

  return (
    <Layout style={{ minHeight: '100vh', background: 'var(--primary-dark)' }}>
      {/* 侧边栏 */}
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        style={{ 
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(15px)',
          borderRight: '1px solid var(--glass-border)',
          boxShadow: 'var(--neon-glow)'
        }}
      >
        <div style={{ 
          color: 'var(--primary-cyan)', 
          fontWeight: 700, 
          fontSize: 20, 
          padding: 20, 
          textAlign: 'center',
          borderBottom: '1px solid var(--glass-border)',
          textShadow: '0 0 10px rgba(34, 211, 238, 0.5)'
        }}>
          <ProjectOutlined style={{ marginRight: 8 }} />
          {!collapsed && 'TaskFlow'}
        </div>
        <Menu 
          theme="dark" 
          mode="inline" 
          selectedKeys={[currentView]}
          style={{ background: 'transparent', border: 'none' }}
        >
          <Menu.Item 
            key="dashboard" 
            icon={<DashboardOutlined />}
            onClick={() => setCurrentView('dashboard')}
          >
            仪表盘
          </Menu.Item>
          <Menu.Item 
            key="projects" 
            icon={<ProjectOutlined />}
            onClick={() => setCurrentView('projects')}
          >
            项目管理
          </Menu.Item>
          <Menu.Item 
            key="tasks" 
            icon={<CheckCircleOutlined />}
            onClick={() => setCurrentView('tasks')}
          >
            任务管理
          </Menu.Item>
          <Menu.Item 
            key="analytics" 
            icon={<BarChartOutlined />}
            onClick={() => setCurrentView('analytics')}
          >
            数据分析
          </Menu.Item>
          <Menu.Item 
            key="settings" 
            icon={<SettingOutlined />}
            onClick={() => setCurrentView('settings')}
          >
            系统设置
          </Menu.Item>
        </Menu>
      </Sider>

      {/* 主体布局 */}
      <Layout>
        {/* 顶部导航栏 */}
        <Header style={{ 
          background: 'var(--glass-bg)', 
          backdropFilter: 'blur(15px)',
          borderBottom: '1px solid var(--glass-border)',
          boxShadow: '0 2px 20px rgba(0,0,0,0.3)',
          padding: '0 24px', 
          display: 'flex', 
          alignItems: 'center', 
          height: 64,
          zIndex: 1000
        }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ marginRight: 16, fontSize: 16 }}
          />
          <div style={{ flex: 1 }}>
            <Input
              style={{ width: 300 }}
              prefix={<SearchOutlined />}
              placeholder="搜索项目、任务或成员..."
              allowClear
            />
          </div>
          <Space size="middle">
            <Dropdown overlay={notificationMenu} trigger={['click']} placement="bottomRight">
              <Badge count={3} size="small">
                <Button type="text" icon={<BellOutlined />} style={{ fontSize: 16 }} />
              </Badge>
            </Dropdown>
            <Dropdown overlay={userMenu} trigger={['click']} placement="bottomRight">
              <Button type="text" style={{ padding: 0, height: 'auto' }}>
                <Avatar icon={<UserOutlined />} style={{ marginRight: 8 }} />
                <span style={{ color: '#262626' }}>{currentUser.name}</span>
              </Button>
            </Dropdown>
            <Button 
              type="text" 
              icon={<UserOutlined />} 
              onClick={() => setShowUserInfo(!showUserInfo)}
              style={{ fontSize: 16 }}
            >
              个人信息
            </Button>
            <Button type="primary" icon={<PlusOutlined />}>新建项目</Button>
          </Space>
        </Header>

        {/* 内容区域 */}
        <Content style={{ margin: 0, minHeight: 'calc(100vh - 64px)' }}>
          {currentView === 'dashboard' && renderDashboard()}
          {currentView === 'projects' && renderProjects()}
          {currentView === 'tasks' && renderTasks()}
          {currentView === 'analytics' && renderAnalytics()}
          {currentView === 'settings' && renderSettings()}
        </Content>
        
        {/* 用户信息侧边栏 */}
        {showUserInfo && (
          <>
            <div 
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0,0,0,0.3)',
                zIndex: 999
              }}
              onClick={() => setShowUserInfo(false)}
            />
            {renderUserInfo()}
          </>
        )}
      </Layout>

      {/* 项目详情模态框 */}
      <Modal
        title="项目详情"
        visible={selectedProject !== null}
        onCancel={() => setSelectedProject(null)}
        footer={[
          <Button key="close" onClick={() => setSelectedProject(null)}>关闭</Button>,
          <Button key="edit" type="primary">编辑项目</Button>
        ]}
        width={800}
      >
        {selectedProject && (
          <div>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Card title="基本信息" size="small">
                  <p><strong>项目名称：</strong>{selectedProject.name}</p>
                  <p><strong>部门：</strong>{selectedProject.department}</p>
                  <p><strong>负责人：</strong>{selectedProject.leader}</p>
                  <p><strong>状态：</strong><Tag color={getStatusColor(selectedProject.status)}>{selectedProject.status}</Tag></p>
                  <p><strong>优先级：</strong><Tag color={getPriorityColor(selectedProject.priority)}>{selectedProject.priority}</Tag></p>
                </Card>
              </Col>
              <Col span={12}>
                <Card title="时间信息" size="small">
                  <p><strong>开始时间：</strong>{selectedProject.startDate}</p>
                  <p><strong>结束时间：</strong>{selectedProject.endDate}</p>
                  <p><strong>实际开始：</strong>{selectedProject.actualStartDate || '未开始'}</p>
                  <p><strong>实际结束：</strong>{selectedProject.actualEndDate || '进行中'}</p>
                  <p><strong>完成率：</strong><Progress percent={selectedProject.rate} size="small" /></p>
                </Card>
              </Col>
            </Row>
            
            <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
              <Col span={12}>
                <Card title="团队成员" size="small">
                  <div>
                    {selectedProject.members.map((member, index) => (
                      <Tag key={index} style={{ marginBottom: 4 }}>{member}</Tag>
                    ))}
                  </div>
                </Card>
              </Col>
              <Col span={12}>
                <Card title="里程碑" size="small">
                  <Timeline size="small">
                    {selectedProject.milestones.map((milestone, index) => (
                      <Timeline.Item key={index}>{milestone}</Timeline.Item>
                    ))}
                  </Timeline>
                </Card>
              </Col>
            </Row>
            
            <Card title="项目描述" size="small" style={{ marginTop: 16 }}>
              <p>{selectedProject.desc}</p>
            </Card>
          </div>
        )}
      </Modal>

      {/* 新建项目模态框 */}
      <Modal
        title="新建项目"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setIsModalVisible(false)}>取消</Button>,
          <Button key="submit" type="primary">创建项目</Button>
        ]}
        width={600}
      >
        <Form layout="vertical">
          <Form.Item label="项目名称" required>
            <Input placeholder="请输入项目名称" />
          </Form.Item>
          <Form.Item label="部门" required>
            <Select placeholder="请选择部门">
              <Option value="研发部">研发部</Option>
              <Option value="市场部">市场部</Option>
              <Option value="运营部">运营部</Option>
            </Select>
          </Form.Item>
          <Form.Item label="负责人" required>
            <Input placeholder="请输入负责人" />
          </Form.Item>
          <Form.Item label="优先级">
            <Select placeholder="请选择优先级">
              <Option value="high">高</Option>
              <Option value="medium">中</Option>
              <Option value="low">低</Option>
            </Select>
          </Form.Item>
          <Form.Item label="开始时间">
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item label="结束时间">
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item label="项目描述">
            <Input.TextArea rows={3} placeholder="请输入项目描述" />
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
}

export default App;
