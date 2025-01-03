
import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider('https://eth-holesky.g.alchemy.com/v2/vCs7XkwchsoJQiMyuKkJQNzVpoOXf4Li')
const walletAddress="0x0be42dE05B7CB8843A3890aA8109C966f1b2b469";

const walletAbi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_taskId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_employee",
				"type": "address"
			}
		],
		"name": "completeTask",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_taskName",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_employee",
				"type": "address"
			}
		],
		"name": "createTask",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_employee",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "registerEmployee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "taskId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "taskName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "taskEndTime",
				"type": "uint256"
			}
		],
		"name": "TaskCompleted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "taskId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isCompleted",
				"type": "bool"
			}
		],
		"name": "TaskCompletionStatus",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "taskId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "taskName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "assignedTo",
				"type": "address"
			}
		],
		"name": "TaskCreated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_employee",
				"type": "address"
			}
		],
		"name": "employeeDetail",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "employeeId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "totalTasks",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalTasksCompleted",
				"type": "uint256"
			},
			{
				"internalType": "string[]",
				"name": "taskNames",
				"type": "string[]"
			},
			{
				"internalType": "uint256[]",
				"name": "taskStartTimes",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256",
				"name": "taskEndTime",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "manager",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const contractInteraction = async()=>{
    const walletContract = new ethers.Contract(walletAddress, walletAbi,provider);

    const managerName= await walletContract.manager();
    console.log("Manager Name:",managerName);
    
    const empDetail = await walletContract.employeeDetail("0xd68D856780fcb7e704da968e477Dc0dB729c8D8F");
    console.log("employee Detail:" , empDetail)
};
contractInteraction();