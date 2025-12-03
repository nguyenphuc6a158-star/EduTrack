import { Card, Row } from "antd";
import React from "react";
import SelectChapter from "../../chapterManager/components";

export default class HomePage extends React.Component{
	render(){
		return(
			<Card>
				<Row>
					<SelectChapter />
				</Row>
			</Card>
		)
	}
}