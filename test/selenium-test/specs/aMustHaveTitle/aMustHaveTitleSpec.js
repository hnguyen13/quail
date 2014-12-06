describe('assessment: aMustHaveTitle', function () {
  before(quailTestRunner.setup('http://localhost:9999/aMustHaveTitle/aMustHaveTitle.html'));

  it('should have a client', function () {
    expect(this.client).to.exist;
  });

  it('should have results', function () {
    expect(this.results).to.exist;
  });

  it('should have tests', function () {
    expect(this.results.stats.tests).to.equal(250);
  });

  it('should have cases', function () {
    expect(this.results.stats.cases).to.equal(331);
  });
});