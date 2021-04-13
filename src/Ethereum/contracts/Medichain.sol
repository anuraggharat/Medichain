pragma solidity >=0.4.25;

contract Medichain {
    string public name;
    uint256 public imageCount = 0;
    uint256 public doctorCount=0;
    mapping(uint256 => Image) public images;
    mapping(address => AddedDoctor) public accessList;

    struct Image {
        uint256 id;
        string hash;
        string description;
        address author;
        string owner;
    }
    
    //store data of every doctor added to access list
    struct AddedDoctor {
        uint256 id;
        address doctor;
        string doctorName;
        string timestamp;
    }



    event ImageCreated(
        uint256 id,
        string hash,
        string description,
        address author,
        string owner
    );

    constructor() public{
        name = "MediChain";
    }

    function uploadImage(string memory _imgHash, string memory _description,string memory _owner)
        public
    {
    
        require(bytes(_imgHash).length > 0);
        
        require(bytes(_description).length > 0);
        
        require(msg.sender != address(0));

        
        imageCount++;

        // Add Image to the contract
        images[imageCount] = Image(
            imageCount,
            _imgHash,
            _description,
            msg.sender,
            _owner
        );
        // Trigger an event
        emit ImageCreated(imageCount, _imgHash, _description, msg.sender,_owner);
    }
    
    function addDoctor(address  _doctorAddress,string memory _doctorName, string memory _date) public{
                
        require(bytes(_doctorName).length > 0);
        
        require(msg.sender != address(0));
              doctorCount++;
        
        accessList[_doctorAddress] = AddedDoctor(
            doctorCount,
            _doctorAddress,
            _doctorName,
            _date
        );
  
        
    }
    
    function checkGranted(address _doctorAddress) public view returns (bool)
    {
        if(accessList[_doctorAddress].id >0){
            return true;
        }
        return false;
    }
    
    
    function revokeAccess(address _doctorAddress) public 
    {
        if(accessList[_doctorAddress].id >0){
            delete accessList[_doctorAddress];
        
        }
        
        
    }
    
}
