import React, {Component} from 'react';
import {Table, Button} from 'reactstrap';


class App extends Component {
 
  render() {
    return (
      
        <div className="App" container>
            <Table>
              <thead>
                <tr>
                  <th>authors</th>
                  <th>description</th>
                  <th>image</th>
                  <th>link</th>
                  <th>title</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Serguei</td>
                  <td>Best book ever</td>
                  <td>Image</td>
                  <td>http://dd</td>
                  <td>The sumer</td>
                  <td>
                    <Button color="success" size="sm" className="mr-2">Edit</Button>
                    <Button color="danger" size="sm">Delete</Button>
                  </td>
                </tr>
              </tbody>
            
            </Table>
          
        </div>
      
    )
  };
};

export default App;
