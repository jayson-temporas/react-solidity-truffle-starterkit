const { assert } = require('chai');

const Token = artifacts.require('Token');

require('chai').use(require('chai-as-promised')).should()


contract('Token Contract', ([deployer, account1, account2]) => {
    let token;

    beforeEach( async () => {
        token = await Token.new();
    });

    describe('Initial token count', async () => {
        it('has exactly 1000 token', async() => {
            tokenCount = await token.tokenCount();
            
            assert.equal(tokenCount, 1000);
        })
    });
})