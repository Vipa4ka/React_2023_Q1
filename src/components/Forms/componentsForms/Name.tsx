import { Component, Fragment } from 'react';
import styles from '../Forms.module.css';

interface NameProps {
  name: { refs: React.RefObject<HTMLInputElement> };
  surname: React.RefObject<HTMLInputElement>;
}

class Name extends Component<NameProps> {
  //   constructor(props: Record<string, never>) {
  //     super(props);
  //     this.handleChange = this.handleChange.bind(this);
  //     this.name = createRef();
  //     this.surname = createRef();
  //   }

  //   handleChange(event: React.SyntheticEvent) {
  //     event.preventDefault();

  //     const { name, surname } = this;

  //     const currentName = (name.current as HTMLInputElement).value;
  //     const currentSurname = (surname.current as HTMLInputElement).value;
  //     console.log(currentName, currentSurname);
  //   }

  render() {
    return (
      <Fragment></Fragment>
      //     <label>
      //       <input
      //         type="text"
      //         ref={this.props.name.ref}
      //         className={styles.input}
      //         name="name"
      //         placeholder="First Name"
      //         // onChange={this.handleChange}
      //         required
      //         autoFocus
      //       />
      //     </label>
      //     {/* <label>
      //       <input
      //         type="text"
      //         ref={this.surname}
      //         className={styles.input}
      //         placeholder="Last Name"
      //         // onChange={this.handleChange}
      //         required
      //       />
      //     </label> */}
    );
  }
}

export default Name;
