pragma solidity >=0.4.25;

contract Medichain {
    string public name = "";
    uint256 public imageCount = 0;
    mapping(uint256 => Image) public images;

    struct Image {
        uint256 id;
        string hash;
        string description;
        address author;
    }

    event ImageCreated(
        uint256 id,
        string hash,
        string description,
        address author
    );

    constructor() public {
        name = "MEDICHAIN";
    }

    function uploadImage(string memory _imgHash, string memory _description)
        public
    {
        // Make sure the image hash exists
        require(bytes(_imgHash).length > 0);
        // Make sure image description exists
        require(bytes(_description).length > 0);
        // Make sure uploader address exists
        require(msg.sender != address(0));

        // Increment image id

        // Add Image to the contract
        images[imageCount] = Image(
            imageCount,
            _imgHash,
            _description,
            msg.sender
        );
        imageCount++;
        // Trigger an event
        emit ImageCreated(imageCount, _imgHash, _description, msg.sender);
    }

    function getImageCount() public view returns (uint256) {
        return imageCount;
    }

    function getImage(uint256 id) public view returns (string memory) {
        return images[id].hash;
    }
}
