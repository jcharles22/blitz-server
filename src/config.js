module.exports={
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
}

module.exports={
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DB_URL: process.env.DATABASE_URL || 'postgresql://dunder-mifflin:password@localhost/blitz',
    JWT_SECRET: process.env.JWT_SECRET || 'change-this-secret',
}