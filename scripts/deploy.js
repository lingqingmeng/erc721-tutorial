async function main() {
   const Pairing = await ethers.getContractFactory("Pairing");

   // Start deployment, returning a promise that resolves to a contract object
   console.log("Pairing",Pairing);
   console.log("Pairing.deploy: ",Pairing.deploy)
   const pairing = await Pairing.deploy();
   console.log("Contract deployed to address:", pairing.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

