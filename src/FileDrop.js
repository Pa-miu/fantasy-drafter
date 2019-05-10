// Based on: https://medium.com/@650egor/simple-drag-and-drop-file-upload-in-react-2cb409d88929

import React, { Component } from 'react';

class FileDrop extends Component {
	dropRef = React.createRef()

	state = {
  	dragging: false,
	}

	handleDragOver = e => {
		e.preventDefault();
  	e.stopPropagation();
	}

	handleDragIn = e => {
		e.preventDefault();
  	e.stopPropagation();
  	if (e.target.className !== this.lastDrag) {
  		// Resolve an issue in Firefox 66.0.5 where events fired more than once on enter
  		this.dragCounter++;
  		this.lastDrag = e.target.className;
  	}
  	if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
    	this.setState({dragging: true});
  	}
	}

	handleDragOut = e => {
		e.preventDefault();
  	e.stopPropagation();
  	this.dragCounter--;
  	this.lastDrag = null;
  	if (this.dragCounter > 0) return
  	this.setState({dragging: false});
	}
	
	handleDrop = e => {
		e.preventDefault();
  	e.stopPropagation();
  	this.setState({dragging: false})
  	if (e.dataTransfer.files && e.dataTransfer.files.length > 0){
  		//this.props.handleDrop(e.dataTransfer.files)
  		//e.dataTransfer.clearData();
  		this.dragCounter = 0;
  	}
	}

	componentDidMount() {
		this.dragCounter = 0;
		this.lastDrag = null;
		const div = this.dropRef.current;
		div.addEventListener('dragenter', this.handleDragIn);
		div.addEventListener('dragleave', this.handleDragOut);
		div.addEventListener('mouseleave', this.handleMouseLeave);
		div.addEventListener('dragover', this.handleDragOver);
		div.addEventListener('drop', this.handleDrop);
	}

	componentWillUnmount() {
		const div = this.dropRef.current;
		div.removeEventListener('dragenter', this.handleDragIn);
		div.removeEventListener('dragleave', this.handleDragOut);
		div.aremoveEventListener('mouseleave', this.handleMouseLeave);
		div.removeEventListener('dragover', this.handleDragOver);
		div.removeEventListener('drop', this.handleDrop);
	}

	render() {
		return(
			<div ref={this.dropRef} className='FileDrop'>
				{
					this.state.dragging &&
					<div className='FileDropOverlay'>
						<div className='FileDropOverlayText'>
							{this.props.dropmessage}
						</div>
					</div>
				}
				{this.props.name}
			</div>
		)
	}
}

export default FileDrop;