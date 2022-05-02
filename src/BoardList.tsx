import { Component } from "react";
import Table from "react-bootstrap/Table";

/**
 * BoardList class
 */
class BoardList extends Component {
    /**
     * @return {Component} Component
     */
    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>게시글</td>
                        <td>테스터</td>
                        <td>2022-04-30</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}

export default BoardList;
