import styled from "styled-components";

export const PaginationWrapper = styled.div`
	&& {
		position: relative;
		text-align: center;
		padding: 5px;
		margin-top: 20px;
	}
`;

export const Block = styled.div`
	&& {
		background: #fff;
		display: inline-block;
		padding: 5px 30px;
		box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
	}
`;

export const Info = styled.div`
	&& {
		display: inline-block;
		font-size: 13px;
		color: #8A8A8A;
		> span:first-child {
			margin-right: 5px;
		}
	}
`;

export const Navigation = styled.div`
	&& {
		display: inline-block;
	}
`;