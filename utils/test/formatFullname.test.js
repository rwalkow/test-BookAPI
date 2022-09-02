const cutText = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {
  it('should return an error if "fullName" is empty', () => {
    expect(cutText('')).to.equal('Error');
  });

  it('should return an error if "fullName" arg is not a string', () => {
    expect(cutText(undefined)).to.equal('Error');
    expect(cutText(123)).to.equal('Error');
    expect(cutText({})).to.equal('Error');
    expect(cutText([])).to.equal('Error');
    expect(cutText(function () { })).to.equal('Error');
  });

  it('should return an error if "fullName" have not space ', () => {
    expect(cutText('John')).to.equal('Error');
  });

  it('should return an error if "fullName" have more space ', () => {
    expect(cutText('John Doe Test')).to.equal('Error');
  });

  it('should return an error if it will not be case-sensitive first i last name ', () => {
    expect(cutText('joHN DoE')).to.equal('John Doe');
    expect(cutText('JOHN doE')).to.equal('John Doe');
    expect(cutText('amanda doe')).to.equal('Amanda Doe');
    expect(cutText('JOHN DOE')).to.equal('John Doe');
  });
});
