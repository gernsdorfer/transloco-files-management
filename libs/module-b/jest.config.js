module.exports = {
  name: 'module-b',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/module-b',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
