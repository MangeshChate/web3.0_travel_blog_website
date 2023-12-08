// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Tourblog {
    struct Profile {
        string account;
        string name;
        string profileImg;
        string about;
    }

    struct Post {
        string name;
        string title;
        string profileImg;
        string image;
        string description;
        string place;
        string about;
    }

    mapping(address => Profile) private profiles;
    Post[] public allPosts;

    function setProfile(string memory _account, string memory _name, string memory _profileImg, string memory _about) public {
        profiles[msg.sender] = Profile(_account, _name, _profileImg, _about);
    }

    function getProfile() public view returns (string memory, string memory, string memory, string memory) {
        Profile storage profile = profiles[msg.sender];
        return (profile.account, profile.name, profile.profileImg, profile.about);
    }

    function addPost(
        string memory _name,
        string memory _title,
        string memory _profileImg,
        string memory _image,
        string memory _description,
        string memory _place,
        string memory _about

    ) public {
        allPosts.push(Post(_name, _title, _profileImg, _image, _description , _place ,_about));
    }

    function getPosts() public view returns (Post[] memory) {
        return allPosts;
    }
}
//0x567F49925693D1F979243A9E3C5CeD6774F58F02