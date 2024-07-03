const { Web3 } = require('web3');

// Create Web3 instance
const web3 = new Web3('https://rpc.api.moonbase.moonbeam.network');

const accountFrom = {
    privateKey: 'e21e6f361bc0bba02154182c31380fd9ef81d42b1d8178f87d137652ad1f664d',
    address: '0x31F91Ec09F23dA9D91af271650543e21B77D867b',
  };
  const addressTo = '0x7581Fd69f35883132Ea29959B132E11385BC15F0'; // Change addressTo
  
  // 3. Create send function
  const send = async () => {
    console.log(
      `Attempting to send transaction from ${accountFrom.address} to ${addressTo}`
    );
  
    // 4. Sign transaction with PK
    const createTransaction = await web3.eth.accounts.signTransaction(
      {
        gas: 21000,
        to: addressTo,
        value: web3.utils.toWei('0.1', 'ether'),
        gasPrice: await web3.eth.getGasPrice(),
        nonce: await web3.eth.getTransactionCount(accountFrom.address),
      },
      accountFrom.privateKey
    );
  
    // 5. Send transaction and wait for receipt
    const startTime = Date.now();
    const createReceipt = await web3.eth.sendSignedTransaction(
      
      createTransaction.rawTransaction
    );
    const endTime = Date.now();
    const confirmationTime = (endTime - startTime) / 1000;
    console.log(
      `Transaction successful with hash: ${createReceipt.transactionHash}, Time: ${confirmationTime}, GasPrice:${createReceipt.gasUsed}`
    );
  };
  
  // 6. Call send function
  send();