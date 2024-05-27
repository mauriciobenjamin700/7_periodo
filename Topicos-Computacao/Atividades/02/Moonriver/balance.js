const { Web3 } = require('web3');

// Create Web3 instance
const web3 = new Web3('https://rpc.api.moonbase.moonbeam.network');

// 2. Create address variables
const addressFrom = '0x31F91Ec09F23dA9D91af271650543e21B77D867b';
const addressTo = '0x7581Fd69f35883132Ea29959B132E11385BC15F0';

// 3. Create balances function
const balances = async () => {
  // 4. Fetch balance info
  const balanceFrom = web3.utils.fromWei(
    await web3.eth.getBalance(addressFrom),
    'ether'
  );
  const balanceTo = web3.utils.fromWei(
    await web3.eth.getBalance(addressTo),
    'ether'
  );

  console.log(`The balance of ${addressFrom} is: ${balanceFrom} DEV`);
  console.log(`The balance of ${addressTo} is: ${balanceTo} DEV`);
};

// 5. Call balances function
balances();