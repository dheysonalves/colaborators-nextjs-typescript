module.exports = {
	// Browser jsdom test
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['/node_modules/', '/.next/'],
	collectCoverage: true,
	collectCoverageFrom: [
		'src/components/**/*.ts(x)?',
		'src/api/*.ts(x)?',
		'src/utils/*.ts(x)?',
		'!src/**/(*.)?styles.ts',
		'!src/**/*.stories.tsx'
	],
	setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
	modulePaths: ['<rootDir>/src/']
}
