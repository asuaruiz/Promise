console.log('Before');

console.log('After');

getUser(1)
  .then(user => getRepositories(user.gitHubUsername))
  .then(repos => getCommits(repos[0]))
  .then(commits => console.log('Commits',commits))
  .catch(err => console.log('Error', err.message));

function getUser(id) {
  return new Promise((resolve,reject) => {
    //Async To simulate Promise
    setTimeout(() => {
      console.log('Reading a user from a database...');
      resolve({ id: id, gitHubUsername: 'Andrea' });
    }, 2000);
  })
  
}

function getRepositories(username) {
  return new Promise ((resolve,reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      resolve(['repo1', 'repo2', 'repo3']);
    }, 2000);
  })
  
}

function getCommits(repo) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      resolve(['commit']);
    }, 2000);
  })
  
}